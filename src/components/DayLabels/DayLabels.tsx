import * as React from 'react';
import { View, Text } from 'react-bits';
import { daysOfTheWeek } from '../../util/dates';
import { withStyles, css, WithStylesProps } from '../../util/withStyles';

function _DayLabels({ styles }: WithStylesProps & { children?: React.ReactNode }) {
  return (
    <View {...css(styles.dayLabels)}>
      {Object.keys(daysOfTheWeek).map((day) => {
        return (
          <View key={day} {...css(styles.labelWrapper)}>
            <Text {...css(styles.dayLabel)}>
              {day.replace(/^./i, char => char.toUpperCase())}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

export const DayLabels = withStyles(({ primitiveCalendar }) => ({
  dayLabels: {
    flexDirection: 'row',
  },
  labelWrapper: {
    width: primitiveCalendar.sizing.day,
    justifyContent: 'center',
    marginLeft: -1,
    alignItems: 'center',
  },
  dayLabel: {
    color: primitiveCalendar.color.text,
    fontSize: primitiveCalendar.font.captionSize,
  },
}))<{}>(_DayLabels);
