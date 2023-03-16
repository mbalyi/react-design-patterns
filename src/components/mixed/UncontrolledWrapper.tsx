import React from "react";
import { Box, Line } from "../../styles/common";
import { Uncontrolled } from "../Uncontrolled";

export const UncontrolledWrapper = () => {
  const [message, setMessage] = React.useState<string | null>(null);

  const onSubmit = (value: string) => {
    setMessage(value);
  };

  return (
    <Box>
      <Line>
        <Uncontrolled onSubmit={onSubmit} />
      </Line>
      {message && (
        <Line>
          <p>Message: {message}</p>
        </Line>
      )}
    </Box>
  );
};
