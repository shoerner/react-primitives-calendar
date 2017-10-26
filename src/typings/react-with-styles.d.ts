
declare module 'react-with-styles' {
  import { ComponentType } from 'react';
  
  interface ThemedStyleSheetInterface {
    create(styleHash: any): any;
    resolve(styles: any): ResolvedStyles;
  }

  interface ResolvedStyles {
    style?: any;
    className?: any;
  }
  
  interface CSS {
    (...styles: any[]): ResolvedStyles; 
  }

  interface StyleCreator {
    (theme: any): object;
  }

  interface WrapComponent {
    <TProps>(Component: ComponentType<TProps>): ComponentType<TProps>;
  }

  interface WithStyles {
    (creator: StyleCreator): WrapComponent;
  }

  const css: CSS;

  export const withStyles: WithStyles;
}
