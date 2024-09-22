import cn from "classnames";

import {Div} from "@components/layout";

import {BaseComponentType} from "@/types/main.types";

import s from "./CenteredLayout.module.scss";

type Props = BaseComponentType;

const CenteredLayout = (props: Props) => {
  return (
    <Div {...props} className={cn(s.root, props.className)}>
      {props.children}
    </Div>
  );
};

export default CenteredLayout;
