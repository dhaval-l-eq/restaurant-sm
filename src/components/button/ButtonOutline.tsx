import { PropsWithChildren } from "react";
import { ButtonClassProps } from "../../typescript/interfaces/global";
import ButtonBase from "./ButtonBase";

function ButtonOutline(props: PropsWithChildren<ButtonClassProps>) {
   return (
      <ButtonBase {...props} customClass={`${props.customClass} btn-outline-primary`}>{props.children}</ButtonBase>
   );
}
export default ButtonOutline;
