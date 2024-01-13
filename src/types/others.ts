import { Dispatch, SetStateAction } from "react";

export type TElement = any;
// export type TStyles = ViewStyle | TextStyle | ImageStyle;
// export type TStyled = { style?: TStyles };
export type TOnChangeText = (text: string) => void;
export type TSetState<T> = Dispatch<SetStateAction<T>>;

export type TUser = {
   name: string;
   email: string;
   password: string;
};
