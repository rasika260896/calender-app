import React from 'react';
import { render,screen } from '@testing-library/react';
import App from './App';

test('renders the App component with the specific date', () => {
  render(<App />);

  // Check if the text "My Calendar App" is present in the rendered component
  const appTitle = screen.getByText('My Calendar App');
  expect(appTitle).toBeInTheDocument();


});

test('creates a specific date object', () => {
  const specificDate = new Date('2023-03-10');

  // Check if the year, month, and day are correct
  expect(specificDate.getFullYear()).toBe(2023);
  expect(specificDate.getMonth()).toBe(2); // Months are 0-based, so March is 2
  expect(specificDate.getDate()).toBe(10);
});
