export const getDate = date => {
  if (!date) {
    date = new Date();
  } else {
    date = new Date(date);
  }
  const monthNames = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'May',
    'JUN',
    'JUL',
    'AUG',
    'SEPT',
    'OCT',
    'NOV',
    'DEC'
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${monthNames[monthIndex]} ${day}, ${year}`;
};

const nth = d => {
  if (d > 3 && d < 21) return 'th'; // thanks kennebec
  switch (d % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

export const getDateInFull = date => {
  const selectedDate = !date ? new Date() : new Date(date);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const day = selectedDate.getDate();
  const monthIndex = selectedDate.getMonth();
  const year = selectedDate.getFullYear();

  return `${monthNames[monthIndex]} ${day}${nth(day)}, ${year}`;
};

export const getWeekOf = () => {
  const date = new Date();
  const day = date.getDay();
  let prevMonday;
  if (date.getDay() === 0) {
    prevMonday = new Date().setDate(date.getDate() - 7);
  } else {
    prevMonday = new Date().setDate(date.getDate() - day);
  }

  return getDateInFull(prevMonday);
};
