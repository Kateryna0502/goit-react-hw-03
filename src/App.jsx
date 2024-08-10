import { useState, useEffect } from 'react'


import ContactList from './components/ContactList/ContactList.jsx'
import SearchBox from './components/SearchBox/SearchBox.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx'
import dataFromArray from "./contacts.json"

import { nanoid } from 'nanoid'

function App() {
  const [users, setUsers] = useState(() => {
    const localData = localStorage.getItem("users");
    return localData ? JSON.parse(localData) : dataFromArray;
  });
  
  const [filterValue, setFilterValue] = useState("");
  const onAddContact = (contact) => {
    const finalContact = {
      ...contact,
      id: nanoid(),
    };

    setUsers([finalContact, ...users]);
  };
  const onDeleteContact = (contactId) => {
    

    setUsers(users.filter((item) => item.id !== contactId));
  };

  const handleFilter = (event) => {
    const value = event.target.value;

    setFilterValue(value);
  };
  const filteredContacts = users.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

  return (
    <>
      <div>
  <h1>Phonebook</h1>
  <ContactForm onAddContact={onAddContact} />
  <SearchBox value={filterValue}
          handleFilter={handleFilter}/>
  <ContactList contacts={filteredContacts} onDeleteContact={onDeleteContact} />
</div>
    </>
  )
}

export default App
