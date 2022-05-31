import { Dispatch, SetStateAction } from "react";

export interface IInput {
  title: string;
  placeholder?: string;
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
  type: "email" | "password" | "text" | "number";
}
