import React from "react";
import { EXAMPLE_DATA } from "../example/data-set";
import { Data } from "../types/data";

interface ContainerProps {
  children: React.ReactElement | React.ReactElement[];
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  const [data, setData] = React.useState<Data[]>([]);

  React.useEffect(() => {
    setData(EXAMPLE_DATA);
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { data });
        } else {
          return child;
        }
      })}
    </>
  );
};
