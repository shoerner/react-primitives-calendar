import * as React from 'react';
import { View, Text } from 'react-bits';
import { createIcons, IconProps } from './createIcons';

export { IconProps };

export const {
  ArrowLeft,
  ArrowRight,
} = createIcons({
  ArrowRight: (
    <View>
      <Text>{`>`}</Text>
    </View>
  ),
  ArrowLeft: (
    <View>
      <Text>{`<`}</Text>
    </View>
  ),
});
