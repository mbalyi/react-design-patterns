import React from "react";
import { Box, Line } from "../styles/common";
import { Data } from "../types/data";

export interface PresentationalProps {
  data: Data[];
}

export const Presentational: React.FC<PresentationalProps> = ({ data }) => (
  <>
    {data.map((data) => (
      <Box key={data.id}>
        <Line>
          <p>ID: {data.id}</p>
        </Line>
        <Line>
          <p>Name: {data.name}</p>
        </Line>
        <Line>
          <p>Permission: {data.permission}</p>
        </Line>
      </Box>
    ))}
  </>
);
