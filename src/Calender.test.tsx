import React from 'react';
import { render ,screen} from '@testing-library/react';
import Calender from './Calender';

describe('Calendar Component', () => {
  const mockDate = new Date('2023-03-10');

  it('renders the calendar with the correct month and year', () => {
     render(<Calender date={mockDate} />);
    const monthYearText = screen.getByText('March 2023');
    expect(monthYearText).toBeInTheDocument();
  });

  it('renders the days of the week', () => {
    render(<Calender date={mockDate} />);
    expect(screen.getByText('Sun')).toBeInTheDocument();
    expect(screen.getByText('Mon')).toBeInTheDocument();
    expect(screen.getByText('Tue')).toBeInTheDocument();
    expect(screen.getByText('Wed')).toBeInTheDocument();
    expect(screen.getByText('Thu')).toBeInTheDocument();
    expect(screen.getByText('Fri')).toBeInTheDocument();
    expect(screen.getByText('Sat')).toBeInTheDocument();
  });

  

  it('highlights the specified date', () => {
    render(<Calender date={mockDate} />);
    const highlightedDay = screen.getByText('10');
    expect(highlightedDay).toHaveClass('bg-blue-500');
    expect(highlightedDay).toHaveClass('text-red');
    expect(highlightedDay).toHaveClass('font-bold');
  });
});
