import { cloneElement, ReactElement, SFC } from 'react';

export interface Icons {
  ArrowRight: IconElement;
  ArrowLeft: IconElement;
}

export type CreatedIcons = {
  [I in keyof Icons]: SFC<IconProps>;
};

export type IconElement = ReactElement<any>;

export interface IconProps {
  size?: number;
}

export function createIcon(displayName: string, svg: IconElement) {
  const Icon: SFC<IconProps> = ({ size = 16 }) => {
    return cloneElement(svg, {
      width: size,
      height: size,
    });
  };
  Icon.displayName = `${displayName}Icon`;
  return Icon;
}

export function createIcons(icons: Icons): CreatedIcons {
  const iconsKeys = Object.keys(icons);
  const created = iconsKeys.reduce((acc, key) => {
    const icon = icons[key];
    return Object.assign({}, acc, {
      [key]: createIcon(key, icon),
    });
  },                               {} as any);
  return created;
}
