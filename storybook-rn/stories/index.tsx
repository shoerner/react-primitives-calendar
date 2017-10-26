import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-bits';
import { CalendarStory } from '../../stories';

declare var module;

storiesOf('ReactPrimitivesCalendar', module)
  .add('Calendar', () => (
    <View style={{ alignItems: 'center', paddingTop: 35 }}>
      <CalendarStory />
    </View>
  ));
