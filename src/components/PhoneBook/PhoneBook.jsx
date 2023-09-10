import React, { useState } from 'react';
import { Btn } from 'ui/Btn.styled';
import { MainText, Input, Form } from './PhoneBookStyles.styled';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSliceRTK/contactsSliceRTK';

export default function PhoneBook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact] = useAddContactMutation();
  const { data: contacts, isFetching } = useGetContactsQuery();

  const isNameExists = (contacts || []).some(contact => contact.name === name);
  const isNumberExists = (contacts || []).some(
    contact => contact.number === number
  );

  const handleSubmit = e => {
    e.preventDefault();

    if (isNameExists || isNumberExists) {
      alert(
        isNameExists
          ? 'This name already exists in your contacts.'
          : 'This number already exists in your contacts.'
      );
      return;
    }

    addContact({ name, number });
    clearForm();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const clearForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      {isFetching && <div>Loading...</div>}
      <Form onSubmit={handleSubmit}>
        <MainText>Phone Book</MainText>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
