import * as React from 'react';
import { CalendarMonth } from '../src/components/CalendarMonth';
import { View } from 'react-bits';

const today = new Date();
const month = today.getUTCMonth();
const year = today.getUTCFullYear();

interface State {
  selectedDates: Date[];
  currentMonth: number;
  currentYear: number;
}

export class CalendarStory extends React.Component<{}, State> {
  public state: State = {
    currentMonth: month,
    currentYear: year,
    selectedDates: [],
  };

  private handleDateClick = (date) => {
    this.setState(({ selectedDates }) => {
      const index = selectedDates.findIndex(selected => selected === date);
      if (index === -1) {
        return {
          selectedDates: [...selectedDates, date],
        };
      }
      return {
        selectedDates: [
          ...selectedDates.slice(0, index),
          ...selectedDates.slice(index + 1),
        ],
      };
    });
  }

  private handleMonthChange = (newMonth: number) => {
    this.setState(() => ({
      currentMonth: newMonth,
    }));
  }

  public render() {
    return (
      <View style={{ flex: 0, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <CalendarMonth
          onMonthChange={this.handleMonthChange}
          currentMonth={this.state.currentMonth}
          currentYear={year}
          onDatePress={this.handleDateClick}
          selectedDates={this.state.selectedDates}
          selectionType="multiple"
        />
      </View>
    );
  }
}
