import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

declare var module;

configure(
  () => {
    require('./stories');
  },
  module,
);

const StorybookUI = getStorybookUI({
  port: 8081,
  onDeviceUI: true,
});

AppRegistry.registerComponent('ReactPrimitivesCalendar', () => StorybookUI);

export { StorybookUI as default };
