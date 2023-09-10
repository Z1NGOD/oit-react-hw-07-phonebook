import { ContactsList, ContactItem } from './Contacts.styled';
import { Btn } from 'ui/Btn.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/slice';

const Contacts = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ContactsList>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}: {number}
            <Btn onClick={() => deleteContactHandler(id)}>Delete</Btn>
          </ContactItem>
        ))
      ) : (
        <div>No contacts found</div>
      )}
    </ContactsList>
  );
};

export default Contacts;
