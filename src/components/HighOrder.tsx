import React from "react";
import { useData } from "../hooks/useData";
import { PresentationalProps } from "./Presentational";

/**
 * Components what return another components with enhanced behavior.
 * Just functions. For sharing complex functionality between multiple components.
 * Adding extra functionality to existing components.
 * @param WrappedComponent
 * @returns
 */
export const withData =
  (WrappedComponent: React.ComponentType<PresentationalProps>) =>
  (props: any) => {
    const { data } = useData();

    return <WrappedComponent {...props} data={data} />;
  };
