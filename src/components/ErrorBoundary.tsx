import React from "react";

interface ErrorBoundaryProps {
  children?: React.ReactElement | React.ReactElement[];
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage?: any;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: "",
    };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, errorMessage: error };
  }

  render() {
    if (this.state.hasError) {
      console.error(this.state.errorMessage);
      return <p>Error happened.</p>;
    }

    return this.props.children;
  }
}
