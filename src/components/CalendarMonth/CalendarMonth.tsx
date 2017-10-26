import * as React from 'react';
import { View, Text, Touchable } from 'react-bits';
import {
  MonthWeeks,
  dateIsBetweenDates,
  daysOfTheWeek,
  getCalendarMonthForDate,
} from '../../util/dates';
import { withStyles, css } from '../../util/withStyles';
import { CalendarDay } from '../CalendarDay';
import { DayLabels } from '../DayLabels';
import { CalendarHeader } from '../CalendarHeader';

export interface CalendarMonthProps {
  currentYear: number;
  currentMonth: number;
  selectedDates: Date[];
  onDatePress(date: Date): void;
  styles?: any;
  selectionType: 'single' | 'multiple' | 'range';
  onMonthChange(newMonth: number): void;
}

export interface State {
  weeks: MonthWeeks;
}

class _CalendarMonth extends React.Component<CalendarMonthProps, State> {
  public state: State = {
    weeks: getCalendarMonthForDate(new Date(this.props.currentYear, this.props.currentMonth, 1)),
  };

  private handleDatePress = (date: Date) => {
    this.props.onDatePress(date);
  }

  public componentWillReceiveProps(nextProps: CalendarMonthProps) {
    if (nextProps.currentMonth !== this.props.currentMonth) {
      this.setState(() => ({
        weeks: getCalendarMonthForDate(new Date(this.props.currentYear, nextProps.currentMonth, 1)),
      }));
    }
  }

  private handleNextMonth = () => this.props.onMonthChange(this.props.currentMonth + 1);
  private handlePrevMonth = () => this.props.onMonthChange(this.props.currentMonth - 1);

  public render() {
    const {
      currentMonth,
      currentYear,
      selectedDates,
      selectionType,
      styles,
    } = this.props;
    const { weeks } = this.state;

    const isRangeSelection = selectionType === 'range';

    return (
      <View {...css(styles.calendar)}>
        <CalendarHeader
          currentMonth={currentMonth}
          currentYear={currentYear}
          onNextMonth={this.handleNextMonth}
          onPrevMonth={this.handlePrevMonth}
        />
        <DayLabels />
        {weeks.map((week, j) => {
          return (
            <View key={j} {...css(styles.weekRow)}>
              {week.map((day, i) => {
                const isSelected = this.props.selectedDates.includes(day);
                const isOutsideDay = day.getUTCMonth() !== currentMonth;
                const isInRange = isRangeSelection
                  && selectedDates.length === 2
                  && dateIsBetweenDates(day, selectedDates[0], selectedDates[1]);

                return (
                  <CalendarDay
                    key={day.toISOString()}
                    day={day}
                    isDisabled={isOutsideDay}
                    isInRange={isInRange}
                    isSelected={isSelected}
                    onPress={this.handleDatePress}
                  />
                );
              })}
            </View>
          );
        })}
      </View>
    );
  }
}

export const CalendarMonth = withStyles(() => {
  return {
    calendar: {},
    weekRow: {
      flex: 0,
      flexDirection: 'row',
    },
  };
})(_CalendarMonth);
