import Contact from "../Contact/Contact.jsx";
const ContactList = ({ contacts }) => {
  return contacts.map((contact) => {
    return (
      <Contact
            key={contact.id}
            id={contact.id}
        name={contact.name}
        number={contact.number}
        
        
      />
    );
  });
};

export default ContactList;