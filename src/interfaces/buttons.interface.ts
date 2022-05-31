import { Dispatch, SetStateAction } from "react";

export interface IButton {
  title: string;
  value?: any;
  setValue?: Dispatch<SetStateAction<any>>;
}
