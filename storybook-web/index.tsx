import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from 'react-bits';
import { CalendarStory } from '../stories';
import { CalendarMonth } from '../src/components/CalendarMonth';
declare var module;

storiesOf('Calendar', module)
  .add('Calendar', () => <CalendarStory />);
