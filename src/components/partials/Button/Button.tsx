import cn from "classnames";

import {BaseComponentType} from "@/types/main.types";

import s from "./Button.module.scss";

interface Props extends BaseComponentType {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = (props: Props) => {
  return (
    <button {...props} className={cn(s.root, props.className)}>
      {props.children}
    </button>
  );
};

export default Button;
