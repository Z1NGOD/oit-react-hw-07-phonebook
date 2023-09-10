import styled from "@emotion/styled";
const ContactsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 16px;
`;

const ContactItem = styled.li`
  padding: 12px;
  border-radius: 6px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;


export { ContactsList, ContactItem}