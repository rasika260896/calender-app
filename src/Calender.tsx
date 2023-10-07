import React from 'react';

interface CalendarProps {
  date: Date;
}

const Calendar: React.FC<CalendarProps> = ({ date }) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDay = firstDayOfMonth.getDay();

  const getDayClassName = (day: number) => {
    const currentDate = new Date(year, month, day);
    return currentDate.toDateString() === date.toDateString()
      ? 'bg-blue-500 text-red font-bold'
      : '';
  };

  return (
    <div className="calendar p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">
        {date.toLocaleString('default', { month: 'long' })} {year}
      </h2>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div
            key={day}
            className="text-center text-gray-600 font-semibold"
          >
            {day}
          </div>
        ))}
        {Array.from({ length: startingDay }, (_, index) => (
          <div key={`empty-${index}`} className="text-center"></div>
        ))}
        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1;
          return (
            <div
              key={day}
              className={`text-center py-2 ${getDayClassName(day)}`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
