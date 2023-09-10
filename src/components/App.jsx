import { Container } from 'ui/Container.styled';
import PhoneBook from './PhoneBook/PhoneBook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

export function App() {
  return (
    <Container>
      <PhoneBook />
      <Filter />
      <Contacts />
    </Container>
  );
}
