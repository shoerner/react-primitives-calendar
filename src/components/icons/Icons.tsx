// tslint:disable max-line-length
import * as React from 'react';
import { Svg, Path } from 'react-primitives-svg';
import { Touchable, View } from 'react-bits';
import { createIcons, IconProps } from './createIcons';

export { IconProps };

export const {
  ArrowLeft,
  ArrowRight,
} = createIcons({
  ArrowRight: (
    <Svg
      x="0"
      y="0"
      viewBox="0 0 1000 1000"
      enableBackground="new 0 0 1000 1000"
    >
      <Path
        d="M694.4,242.4l249.1,249.1c11,11,11,21,0,32L694.4,772.7c-5,5-10,7-16,7c-6,0-11-2-16-7c-11-11-11-21,0-32l210.1-210.1H67.1 c-13,0-23-10-23-23c0-13,10-23,23-23h805.4L662.4,274.5C641.4,253.4,673.4,221.4,694.4,242.4z"
      />
    </Svg>
  ),
  ArrowLeft: (
    <Svg
      x="0"
      y="0"
      viewBox="0 0 1000 1000"
      enableBackground="new 0 0 1000 1000"
    >
      <Path
        d="M336.2,274.5L126.1,484.5h805.4c13,0,23,10,23,23c0,13-10,23-23,23H126.1l210.1,210.1c11,11,11,21,0,32c-5,5-10,7-16,7 s-11-2-16-7L55.1,523.6c-11-11-11-21,0-32l249.1-249.1C325.2,221.4,357.2,253.4,336.2,274.5z"
      />
    </Svg>
  ),
});
