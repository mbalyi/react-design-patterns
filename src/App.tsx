import React from "react";
import { Container } from "./components/Container";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Layout } from "./components/Layout";
import { ControlledWrapper } from "./components/mixed/ControlledWrapper";
import { UncontrolledWrapper } from "./components/mixed/UncontrolledWrapper";
import { WrappedPresentationalWithHoC } from "./components/mixed/WrappedPresentationalWithHoC";
import { LogButton } from "./components/PartiallyApplied";
import { Presentational } from "./components/Presentational";
import { Error } from "./example/Error";

function App() {
  return (
    <Layout
      leftComponent={
        <>
          <LogButton />
          <Container>
            <Presentational data={[]} />
          </Container>
          <ErrorBoundary>
            <Error />
          </ErrorBoundary>
        </>
      }
      rightComponent={
        <>
          <ErrorBoundary>
            <UncontrolledWrapper />
            <ControlledWrapper />
            <WrappedPresentationalWithHoC />
          </ErrorBoundary>
        </>
      }
    />
  );
}

export default App;
