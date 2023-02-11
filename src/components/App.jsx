import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  inputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const id = nanoid();
    const name = event.name;
    const number = event.number;
    const { contacts } = this.state;
    if (contacts.find(contact => name === contact.name)) {
      return alert(`${name} is already in contacts.`);
    }
    const contact = { id, name, number };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  filteredContacts = () => {
    const filteredContactList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
    return filteredContactList;
  };

  handleDelete = event => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== event),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} inputChange={this.inputChange} />
        <ContactList
          contacts={this.filteredContacts()}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
