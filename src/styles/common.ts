import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Button = styled.button`
    color: #09d3ac;
    border: 1px solid #09d3ac;
    border-radius: 2px;
    padding: 2px 4px;
    margin: 0 2px;
    background: transparent;

    &:hover {
        background: #09d3ac;
        color: #fff;
    }
`

export const Input = styled.input`
    color: #09d3ac;
    border: 1px solid #09d3ac;
    border-radius: 2px;
    padding: 2px 4px;
    margin: 0 2px;
    background: transparent;

    &:focus {
        background: #09d3ac;
        color: #fff;
        border-color: #09d3ac;
    }
`