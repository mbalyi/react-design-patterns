import React from "react";
import { ButtonComponent, ButtonComponentProps } from "./Composition";

export const partiallyApplyButton =
  (
    Component: React.ComponentType<ButtonComponentProps>,
    partialProps: Partial<ButtonComponentProps>
  ) =>
  (props: any) =>
    <Component {...partialProps} {...props} />;

export const LogButton = partiallyApplyButton(ButtonComponent, {
  text: "Log",
  onClick: () => console.log("We log it"),
});
