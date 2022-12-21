import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import 'modern-normalize';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

	componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
			});
    } 
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = (name, number, id) => {
    this.setState(prevState => ({
      name: { name },
      number: { number },
      contacts: [...prevState.contacts, { id, name, number }],
    }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteUser = userId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== userId),
    }));
  };

  filteredContact = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <>
        <Title>Phonebook</Title>
        <ContactForm
          onClickSubmit={this.handleSubmit}
          contacts={this.state.contacts}
        />
        <Title>Contacts</Title>
				<Filter onInputChange={this.handleChange} />
        {this.state.contacts.length > 0 ? (
          <>
            <ContactsList
              contacts={this.filteredContact()}
              deleteUser={this.deleteUser}
            />
          </>
        ) : (
          'Sorry. Your phonebok is empty.'
        )}
        <GlobalStyle />
      </>
    );
  }
}
