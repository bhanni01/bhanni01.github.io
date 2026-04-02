import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio heading', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /mayo clinic intern, luther college cs student/i,
    })
  ).toBeInTheDocument();
});
