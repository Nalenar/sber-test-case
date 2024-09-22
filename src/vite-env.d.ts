declare module "*.svg" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<React.ComponentProps<"svg"> & {title?: string}>;

  export default ReactComponent;
}

type CSSModuleClasses = {readonly [key: string]: string};

declare module "*.module.scss" {
  const classes: CSSModuleClasses;
  export default classes;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

/// <reference types="vite/client" />
