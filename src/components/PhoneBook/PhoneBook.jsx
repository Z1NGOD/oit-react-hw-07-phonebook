import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/slice';
import { Btn } from 'ui/Btn.styled';
import { MainText, Input, Form } from './Phonebook.styled';
import { nanoid } from 'nanoid';
export default function PhoneBook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);

  const handleSubmit = e => {
    e.preventDefault();

    const isNameExists = contacts.some(contact => contact.name === name);
    const isNumberExists = contacts.some(contact => contact.number === number);

    if (isNameExists) {
      alert('This name already exists in your contacts.');
      return;
    }

    if (isNumberExists) {
      alert('This number already exists in your contacts.');
      return;
    }

    const id = nanoid();
    dispatch(addContact({ id, name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <MainText>Phone Book</MainText>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          placeholder="Name"
        />
        <MainText>Number</MainText>
        <Input
          type="tel"
          name="number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses, and can start with +"
          required
          value={number}
          onChange={handleChange}
          placeholder="000-000-0000"
        />
        <Btn type="submit">Add contact</Btn>
      </Form>
    </>
  );
}
