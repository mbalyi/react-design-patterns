import React from "react";
import { Input, Line } from "../styles/common";
import { SubmitButton } from "./Composition";

interface UncontrolledProps {
  onSubmit: Function;
}

/**
 * Keep track of its own state and only release them when some event occurs
 * @param param0
 * @returns
 */
export const Uncontrolled: React.FC<UncontrolledProps> = ({ onSubmit }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClick = () => {
    const payload = inputRef.current ? inputRef.current.value : "";
    onSubmit(payload);
  };

  return (
    <Line>
      <Input type="text" ref={inputRef} />
      <SubmitButton onClick={onClick} />
    </Line>
  );
};
