import React from "react";
import { Button } from "../styles/common";

interface ButtonProps {
  onClick: Function;
}

export interface ButtonComponentProps extends ButtonProps {
  text?: string;
  children?: React.ReactNode | React.ReactNode[];
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  onClick,
  text,
  children,
}) => {
  return <Button onClick={() => onClick()}>{text || children}</Button>;
};

export const SubmitButton: React.FC<ButtonProps> = ({ onClick }) => (
  <ButtonComponent onClick={onClick}>Submit</ButtonComponent>
);
