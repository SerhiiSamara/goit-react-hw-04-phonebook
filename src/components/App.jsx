import { GlobalStyle } from './GlobalStyle';
import { useState, useEffect } from 'react';
import 'modern-normalize';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Title } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (name, number, id) => {
    setContacts([...contacts, { id, name, number }]);
  };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const deleteUser = userId => {
    setContacts(contacts.filter(contact => contact.id !== userId));
  };

  const filteredContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm onClickSubmit={handleSubmit} contacts={contacts} />
      <Title>Contacts</Title>
      <Filter onInputChange={handleChange} />
      {contacts.length > 0 ? (
        <>
          <ContactsList contacts={filteredContact()} deleteUser={deleteUser} />
        </>
      ) : (
        'Sorry. Your phonebok is empty.'
      )}
      <GlobalStyle />
    </>
  );
};
