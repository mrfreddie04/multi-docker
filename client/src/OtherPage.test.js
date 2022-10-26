import { render, screen } from '@testing-library/react';
import OtherPage from './OtherPage';

test('renders learn react link', () => {
  render(<OtherPage />);
  const linkElement = screen.getByText(/I am the other page/i);
  expect(linkElement).toBeInTheDocument();
});
