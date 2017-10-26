import * as React from 'react';
import { ArrowProps } from './ArrowProps';
import { Svg, Path } from 'react-primitives-svg';
import { Touchable, View } from 'react-bits';
import { ArrowLeft, ArrowRight } from '../icons';

export function Arrow(props: ArrowProps) {
  const ArrowIcon = props.direction === 'next'
    ? ArrowRight
    : ArrowLeft;

  return (
    <Touchable onPress={props.onPress}>
      <View style={{ height: 25, width: 25, justifyContent: 'center', alignItems: 'center' }}>
        <ArrowIcon size={15} />
      </View>
    </Touchable>
  );
}
