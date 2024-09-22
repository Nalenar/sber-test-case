import cn from "classnames";

import {Div} from "@/components/layout";

import {BaseComponentType} from "@/types/main.types";

import s from "./CarouselSlide.module.scss";

interface Props extends Omit<BaseComponentType, "children"> {
  children: React.ReactNode;
  isShow: boolean;
}

const CarouselSlide = (props: Props) => {
  return (
    <Div {...props} className={cn("slide", {[s.hidden]: !props.isShow}, props.className)}>
      {props.children}
    </Div>
  );
};

export default CarouselSlide;
