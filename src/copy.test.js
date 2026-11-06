import fs from 'fs';
import path from 'path';
import { render } from '@testing-library/react';
import AIDetector from 'avoid-ai-writing-detector';
import App from './App';

// Checks every piece of site copy before it ships. `npm test` runs it, and so
// does .githooks/pre-push before every push.
//
// Two layers:
// 1. the avoid-ai-writing detector (github.com/conorbronsdon/avoid-ai-writing)
// 2. contrast frames such as "x, not y" and "no x, no y". The detector only
//    flags narrow forms of these, and this site uses none of them.

const CONTRAST_FRAMES = [
  ['x, not y', /[,;:–—]\s*(?:and\s+)?not\b/i],
  ['not just x', /\bnot\s+(?:just|only|merely|simply|about|another)\b/i],
  ["doesn't just x", /n['’]t\s+(?:just|only|merely|simply)\b/i],
  ["it's not x", /\b(?:it|this|that)['’]s\s+not\b/i],
  ['not x but y', /\bnot\b[^.!?]{1,60}\bbut\b/i],
  [
    "isn't x, it's y",
    /\b(?:is|are|was|were)(?:n['’]t|\s+not)\b[^.!?]{0,80}?[,;:.–—]\s*(?:it|this|that|they)(?:['’](?:s|re)|\s+(?:is|are|was|were))\b/i,
  ],
  ['no x, no y', /\bno\s+[\w'-]+(?:\s+[\w'-]+){0,2}\s*,\s*(?:and\s+|or\s+)?no\b/i],
  ['x rather than y', /\b(?:rather\s+than|instead\s+of)\b/i],
  ['more than just x', /\bmore\s+than\s+(?:just\s+)?(?:a|an|another)\b/i],
  ['less x, more y', /\bless\s+[\w-]+\s*,\s*more\b/i],
];

const read = (file) =>
  fs.readFileSync(path.join(__dirname, '..', file), 'utf8');

function siteCopy() {
  const { container, unmount } = render(<App />);
  const blocks = [
    ...container.querySelectorAll(
      'h1, main h2, main h3, main p, main li, .shortcuts h2, .shortcuts dd'
    ),
  ].map((el) => el.textContent.replace(/\s+/g, ' ').trim());
  container.querySelectorAll('img[alt]').forEach((img) => blocks.push(img.alt));
  unmount();

  const doc = new DOMParser().parseFromString(
    read('public/index.html'),
    'text/html'
  );
  const manifest = JSON.parse(read('public/manifest.json'));
  blocks.push(
    doc.title,
    doc.querySelector('meta[name="description"]').content,
    manifest.name
  );
  return blocks;
}

test('site copy has no contrast frames like "x, not y"', () => {
  const hits = [];
  siteCopy().forEach((block) => {
    CONTRAST_FRAMES.forEach(([frame, pattern]) => {
      const match = block.match(pattern);
      if (match) hits.push(`${frame}: "${match[0]}" in "${block}"`);
    });
  });
  expect(hits).toEqual([]);
});

test('site copy passes the avoid-ai-writing detector', () => {
  const { issues } = AIDetector.analyzeText(siteCopy().join('\n\n'));
  expect(issues.map((issue) => `${issue.type}: "${issue.text}"`)).toEqual([]);
});
