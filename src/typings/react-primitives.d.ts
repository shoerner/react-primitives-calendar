
declare module 'react-primitives' {
  import { TouchableWithoutFeedbackProps } from 'react-native';
  import { ComponentClass } from 'react';


  export const Touchable: React.ComponentClass<TouchableWithoutFeedbackProps>;
  export { 
    Animated,
    Dimensions,
    Easing,
    Image,
    PixelRatio,
    Platform,
    StyleSheet, 
    Text,
    View,
  } from 'react-native';
}
