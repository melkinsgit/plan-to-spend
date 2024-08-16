import { render, screen } from '@testing-library/react';
import PlanToSpend from './plan-to-spend';

test('renders learn react link', () => {
  render(<PlanToSpend />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
