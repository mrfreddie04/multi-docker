import { render, screen } from '@testing-library/react';
import OtherPage from './OtherPage';

test('renders OtherPage without crashing', () => {
  render(<OtherPage />);
  const linkElement = screen.getByText(/Go Back Home/i);
  expect(linkElement).toBeInTheDocument();
});