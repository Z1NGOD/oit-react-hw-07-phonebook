import styled from "@emotion/styled";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  margin: 0 auto;
`;

const MainText = styled.h1`
  font-size: 42px;
  color: #555;
  margin-bottom: 24px;
`;

const Input = styled.input`
  padding: 14px;
  border: 2px solid #aaa;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  margin-bottom: 16px;
  ::placeholder {
    color: #888;
  }
`;

export { MainText, Input, Form};