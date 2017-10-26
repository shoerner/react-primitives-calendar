import * as React from 'react';
import { withStyles, css, WithStylesProps } from '../../util/withStyles';
import { Arrow } from '../Arrow';
import { View, Text } from 'react-bits';
import { getMonthNameForNumber } from '../../util/dates';

export interface CalendarHeaderProps {
  currentYear: number;
  currentMonth: number;
  onPrevMonth(): void;
  onNextMonth(): void;
  monthIsLocked?: boolean;
}

function _CalendarHeader({
  styles,
  currentMonth,
  currentYear,
  onNextMonth,
  onPrevMonth,
}: CalendarHeaderProps & WithStylesProps) {
  return (
    <View {...css(styles.heading)}>
      <Arrow direction="prev" onPress={onPrevMonth} />
      <Text {...css(styles.monthText)}>
        {getMonthNameForNumber(currentMonth)} {currentYear}
      </Text>
      <Arrow direction="next" onPress={onNextMonth} />
    </View>
  );
}

export const CalendarHeader = withStyles(({ primitiveCalendar }) => ({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    flex: 0,
  },
  monthText: {
    flex: 1,
    textAlign: 'center',
    color: primitiveCalendar.color.text,
    fontSize: primitiveCalendar.font.headingSize,
    fontWeight: primitiveCalendar.font.headingWeight,
  },
}))<CalendarHeaderProps>(_CalendarHeader);
