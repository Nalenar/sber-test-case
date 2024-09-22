import {BaseComponentType} from "@/types/main.types";

interface Props extends BaseComponentType {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  attribute?: React.HTMLAttributes<HTMLDivElement>;
}

const Div = (props: Props) => {
  if (props.isHidden) return null;

  return (
    <div {...props.attribute} className={props.className} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Div;
