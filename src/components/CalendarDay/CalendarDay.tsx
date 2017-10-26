import * as React from 'react';
import { View, Text, Touchable } from 'react-bits';
import {
  MonthWeeks,
  dateIsBetweenDates,
  daysOfTheWeek,
  getCalendarMonthForDate,
} from '../../util/dates';
import { withStyles, WithStylesProps, css } from '../../util/withStyles';

export interface CalendarDayProps {
  day: Date;
  isDisabled: boolean;
  isInRange: boolean;
  isSelected: boolean;
  onPress(date: Date): void;
}

class _CalendarDay extends React.PureComponent<CalendarDayProps & WithStylesProps> {
  private handlePress = () => this.props.onPress(this.props.day);

  public render() {
    const { styles, day, isInRange, isSelected, isDisabled } = this.props;

    const shouldHighlight = isSelected || isInRange;

    return (
      <Touchable
        onPress={this.handlePress}
        disabled={isDisabled}>
        <View
          {...css(
            styles.day,
            isInRange && !isSelected && styles.dayInRange,
            isSelected && styles.daySelected,
          )}
        >
          <Text
            {...css(
              shouldHighlight && styles.dayTextSelected,
              isDisabled && styles.disabled,
            )}
          >
            {day.getDate()}
          </Text>
        </View>
      </Touchable>
    );
  }
}

export const CalendarDay = withStyles(({ primitiveCalendar }) => {
  return {
    day: {
      height: primitiveCalendar.sizing.day,
      width: primitiveCalendar.sizing.day,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: primitiveCalendar.color.core.border,
      marginLeft: -1,
      marginTop: -1,
    },
    disabled: {
      opacity: 0.4,
    },
    daySelected: {
      backgroundColor: primitiveCalendar.color.selected.backgroundColor,
      borderColor: primitiveCalendar.color.selected.borderColor,
    },
    dayInRange: {
      backgroundColor: primitiveCalendar.color.selectedSpan.backgroundColor,
      borderColor:  primitiveCalendar.color.selectedSpan.borderColor,
    },
    dayTextSelected: {
      color: primitiveCalendar.color.selected.color,
    },
  };
})<CalendarDayProps>(_CalendarDay);
