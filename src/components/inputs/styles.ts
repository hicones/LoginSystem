import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: 90px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const Label = styled.label`
  width: auto;
  color: var(--gray02);
  margin-bottom: 13px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  background: transparent;
  border: 1px solid #a8a8b3;
  box-sizing: border-box;
  border-radius: 3px;
  outline: none;
  caret-color: var(--gray02);
  padding: 0 8px;
  color: var(--gray02);
`;
