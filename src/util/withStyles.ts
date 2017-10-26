import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import { css, withStyles } from 'react-with-styles';
import { StyleSheet, Platform } from 'react-bits';
import { Theme, theme } from '../styles/theme';
import { ComponentType } from 'react';
import int from 'react-with-styles-interface-aphrodite';

export interface WithStylesProps {
  styles: any;
  theme: any;
}

export interface WrapWithStyles {
  <Props = {}>(Component: ComponentType<Props>): React.ComponentClass<Props>;
}

export interface StyleCreator {
  (theme: Theme): any;
}

export interface WithStyles {
  <TStyles>(creator: StyleCreator): WrapWithStyles;
}

ThemedStyleSheet.registerTheme(theme);

ThemedStyleSheet.registerInterface(Platform.OS === 'web' ? int : {
  create(styleHash) {
    return StyleSheet.create(styleHash);
  },
  resolve(styles) {
    return { style: styles };
  },
});

const withStylesTyped: WithStyles = withStyles as any;

export {
  css,
  withStylesTyped as withStyles,
};
