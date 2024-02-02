import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';

test('navigates to Contact page', () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  const contactLink = screen.getByText(/Contact/i);
  expect(contactLink).toBeInTheDocument();
  fireEvent.click(contactLink);
  
  const contactElement = screen.getByText(/Contact Page/i);
  expect(contactElement).toBeInTheDocument();
});
