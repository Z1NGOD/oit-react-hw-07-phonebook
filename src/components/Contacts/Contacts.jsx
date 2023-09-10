import { ContactsList, ContactItem } from './Contacts.styled';
import { Btn } from 'ui/Btn.styled';
import { useSelector } from 'react-redux';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSliceRTK/contactsSliceRTK';

const Contacts = () => {
  const { data: contacts, isLoading, error } = useGetContactsQuery();
  const { filter } = useSelector(state => state.filter);
  const [deleteContact] = useDeleteContactMutation();

  const deleteContactHandler = id => {
    deleteContact(id);
  };

  const getFilteredContacts = () => {
    return (contacts || []).filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <ContactsList>
          {(filteredContacts || []).length > 0 ? (
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
      )}
      {error && console.log(error.message)}
    </>
  );
};

export default Contacts;
