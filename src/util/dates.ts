export type Week = Date[];
export type MonthWeeks = Week[];

export const daysOfTheWeek = {
  sun: 0,
  mon: 1,
  tues: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
};

const monthNames = {
  0: 'January',
  1: 'Feburary',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'Auguast',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

export function getMonthNameForNumber(monthNum: number) {
  return monthNames[monthNum];
}

export function getCalendarMonthForDate(date: Date): MonthWeeks {
  const monthNumber = date.getMonth();
  const firstDayOfMonth = getFirstDayOfMonth(date);
  const lastDayOfMonth =  getLastDayOfMonth(date);
  const weeks: MonthWeeks = [
    getCalendarWeekForDate(firstDayOfMonth),
  ];

  while (!weekContainsDate(weeks[weeks.length - 1], lastDayOfMonth)) {
    const prevWeek = weeks[weeks.length - 1];
    const lastDayOfPrevWeek = prevWeek[prevWeek.length - 1];
    const firstDayOfNextWeek = new Date(
      lastDayOfPrevWeek.getUTCFullYear(),
      lastDayOfPrevWeek.getUTCMonth(),
      lastDayOfPrevWeek.getUTCDate() + 1,
    );
    weeks.push(getCalendarWeekForDate(firstDayOfNextWeek));
  }
  return weeks;
}

function weekContainsDate(week: Week, date: Date) {
  return week.some(weekDate => datesMatch(weekDate, date));
}

export function getFirstDayOfMonth(date: Date) {
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), 1);
}

export function getLastDayOfMonth(date: Date) {
  return new Date(date.getUTCFullYear(), date.getUTCMonth() + 1, 0);
}

export function getCalendarWeekForDate(date: Date): Week {
  const startOfWeek = date.getUTCDay() === 0
    ? date
    : new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate() - date.getUTCDay(),
    );

  const week: Week = [startOfWeek];
  for (let i = 1; i < 7; i += 1) {
    const prevDay = week[week.length - 1];
    week.push(
      new Date(
        prevDay.getUTCFullYear(),
        prevDay.getUTCMonth(),
        prevDay.getUTCDate() + 1,
      ),
    );
  }
  return week;
}

// We don't care about time here.  Only year, month, date
export function datesMatch(firstDate: Date, secondDate: Date) {
  return firstDate.getUTCFullYear() === secondDate.getUTCFullYear()
    && firstDate.getUTCMonth() === secondDate.getUTCMonth()
    && firstDate.getUTCDate() === secondDate.getUTCDate();
}

export function dateIsBetweenDates(date: Date, start: Date, end: Date) {
  return date > start && date < end;
}

