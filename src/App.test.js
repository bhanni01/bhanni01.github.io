import { render, screen, within } from '@testing-library/react';
import App from './App';

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
  const group = screen.getByRole('heading', { name: 'start here' }).parentElement;
  const items = within(group).getAllByRole('listitem');
  expect(items[0]).toHaveTextContent(/^antenna,/);
  expect(items[1]).toHaveTextContent(/^untold want,/);
});
