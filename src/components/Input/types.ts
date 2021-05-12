import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons/lib";

export interface IStyleProps {
  isFilled: boolean;
  isFocused: boolean;
}

export default interface IProps extends InputHTMLAttributes<HTMLInputElement>  {
    name: string;
    icon?: IconType;
}
