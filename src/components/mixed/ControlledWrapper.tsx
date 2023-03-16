import React from "react";
import { Box, Line } from "../../styles/common";
import { Controlled } from "../Controlled";

export const ControlledWrapper = () => {
  const [message, setMessage] = React.useState<string>("");

  const handleChange = (value: string) => {
    setMessage(value);
  };

  return (
    <Box>
      <Line>
        <Controlled value={message} onChange={handleChange} />
      </Line>
      {message && (
        <Line>
          <p>Message: {message}</p>
        </Line>
      )}
    </Box>
  );
};
