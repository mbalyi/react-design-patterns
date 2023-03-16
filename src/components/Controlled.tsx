import React from "react";
import { Input, Line } from "../styles/common";

interface ControlledProps {
  value: string;
  onChange: Function;
}

/**
 * don't keep track of its own state. Everything is passed in as props.
 * @param param0
 * @returns
 */
export const Controlled: React.FC<ControlledProps> = ({ value, onChange }) => {
  const handleChange = (event: { target: { value: any } }) => {
    onChange(event.target.value);
  };

  return (
    <Line>
      <Input type="text" value={value} onChange={handleChange} />
    </Line>
  );
};
