import { useState, useEffect } from 'react';
import { GlobalStyle } from '../GlobalStyled/GlobalStyle';
import ContactForm from './ContactForm/ContactForm';
import { Container, Title, Subtitle } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';


export default function App() { 
  const [contacts, setContacts] = useState([
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState('');

//   const useLocalStorage () => {
//     const [state, useState] =
//   }
  
  // useEffect(() => {
  //   window.localStorage.setItem('name', JSON.stringify({ name }));
  // }, [])

  
  const addContacts = ({ name, number }) => {
      const normalizedName = name.toLowerCase();
      const isName = contacts.find(
        (contact) => contact.name.toLowerCase() === normalizedName
      );
        
      if (isName) {
        return alert(`${name} is already in contacts.`);
      }
 
      const contact = {
        id: nanoid(6),
        name,
        number,
      };

    setContacts(contacts => ([contact, ...contacts]));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContact = getContact();
  

    return (
      <Container>
        <GlobalStyle />
        <Title>Phonebook</Title>
        <ContactForm onSubmit={addContacts} />

        <Subtitle>Contacts</Subtitle>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={visibleContact}
          onDeleteContact={deleteContact}
        />
      </Container>
    );
  }


//*Было
// export class App extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     };
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     };
//   };

//  addContacts = ({ name, number }) => {
//    const normalizedName = name.toLowerCase();

//    const isName = this.state.contacts.find(
//      (contact) => contact.name.toLowerCase() === normalizedName
//    );

//    if (isName) {
//      return alert(`${name} is already in contacts.`);
//    }

//    const contact = {
//      id: nanoid(6),
//      name,
//      number,
//    };

//    this.setState(({ contacts }) => ({
//      contacts: [contact, ...contacts],
//    }));
//  };

//   changeFilter = (e) => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getContact = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId)
//     }));
//   };

//   render() {
//     const { filter } = this.state;
//     const visibleContact = this.getContact();

//     return (
//       <Container>
//         <GlobalStyle />
//         <Title>Phonebook</Title>
//         <ContactForm onSubmit={this.addContacts} />

//         <Subtitle>Contacts</Subtitle>
//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactList
//           contacts={visibleContact}
//           onDeleteContact={this.deleteContact}
//         />
//       </Container>
//     );
//   }
// }
