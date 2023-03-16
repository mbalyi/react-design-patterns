import React from "react";

export const Error: React.FC = () => {
  React.useEffect(() => {
    throw new (Error("Auto generated error for example.") as any)();
  }, []);

  return <p>No error</p>;
};
