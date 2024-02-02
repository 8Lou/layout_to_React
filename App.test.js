import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home page by default', () => {
  render(<App />);
  const homeElement = screen.getByText(/Home Page/i);
  expect(homeElement).toBeInTheDocument();
});

test('navigates to Contact page', () => {
  render(<App />);
  const contactLink = screen.getByText(/Contact/i);
  expect(contactLink).toBeInTheDocument();
  contactLink.click();
  const contactElement = screen.getByText(/Contact Page/i);
  expect(contactElement).toBeInTheDocument();
});