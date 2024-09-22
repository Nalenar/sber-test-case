import {ReactElement, ReactNode} from "react";

export type ChildrenType = ReactElement | ReactNode | string | string[];

export type BaseComponentType = {
  className?: string;
  isHidden?: boolean;
  children?: ChildrenType;
};
