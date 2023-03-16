import React from "react";
import styled from "styled-components";

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Wrapper = styled.div`
  height: 100%;
  flex: 1;
`;

interface LayoutProps {
  leftComponent: React.ReactElement;
  rightComponent: React.ReactElement;
}

export const Layout: React.FC<LayoutProps> = ({
  leftComponent,
  rightComponent,
}) => (
  <StyledLayout>
    <Wrapper>{leftComponent}</Wrapper>
    <Wrapper>{rightComponent}</Wrapper>
  </StyledLayout>
);
