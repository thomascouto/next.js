/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const page = screen.getByText(/app\/page.tsx/i);

    expect(page).toBeDefined();
  });
});
