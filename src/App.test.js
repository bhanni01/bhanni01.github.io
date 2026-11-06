import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

// jsdom has no modal dialogs or scrolling
beforeAll(() => {
  HTMLDialogElement.prototype.showModal = function () {
    this.open = true;
  };
  HTMLDialogElement.prototype.close = function () {
    this.open = false;
  };
  Element.prototype.scrollIntoView = jest.fn();
});

const press = (key, options) =>
  fireEvent.keyDown(document.activeElement, { key, ...options });

test('introduces Nischal and offers a way to get in touch', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { level: 1, name: 'nischal bhandari' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: 'bhanni01@luther.edu' })
  ).toHaveAttribute('href', 'mailto:bhanni01@luther.edu');
});

test('every outline entry points at a section on the page', () => {
  const { container } = render(<App />);
  const outline = screen.getByRole('navigation', { name: 'Outline' });
  const links = within(outline).getAllByRole('link');
  expect(links).toHaveLength(3);
  links.forEach((link) => {
    const target = link.getAttribute('href');
    expect(container.querySelector(target)).not.toBeNull();
  });
});

test('leads the project list with antenna and untold want', () => {
  render(<App />);
  const projects = screen.getByRole('region', { name: 'projects' });
  const items = within(projects).getAllByRole('listitem');
  expect(items[0]).toHaveTextContent(/^antenna,/);
  expect(items[1]).toHaveTextContent(/^untold want,/);
});

test('number keys jump to sections and letter keys to projects', () => {
  render(<App />);
  press('2');
  expect(document.activeElement).toBe(
    screen.getByRole('region', { name: 'projects' })
  );
  press('3');
  expect(document.activeElement).toHaveAttribute('id', 'contact');

  const items = within(
    screen.getByRole('region', { name: 'projects' })
  ).getAllByRole('listitem');
  expect(items).toHaveLength(24);
  press('c');
  expect(document.activeElement).toBe(items[2]);
  expect(items[2]).toHaveTextContent(/^boston area bestie,/);
  press('x');
  expect(document.activeElement).toBe(items[23]);

  // browser and system shortcuts pass through untouched
  press('a', { metaKey: true });
  press('1', { ctrlKey: true });
  expect(document.activeElement).toBe(items[23]);
});

test('the shortcut list stays hidden until ? is pressed', () => {
  const { container } = render(<App />);
  expect(container.querySelector('.page')).not.toHaveTextContent(/shortcut/i);
  const list = container.querySelector('dialog');
  expect(list.open).toBe(false);

  press('?', { shiftKey: true });
  expect(list.open).toBe(true);
  expect(within(list).getByText('keyboard shortcuts')).toBeInTheDocument();
  expect(list).toHaveTextContent('a to x');

  press('?', { shiftKey: true });
  expect(list.open).toBe(false);

  press('?', { shiftKey: true });
  press('1');
  expect(list.open).toBe(false);
  expect(document.activeElement).toHaveAttribute('id', 'what-i-do');
});
