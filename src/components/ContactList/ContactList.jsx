import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css"
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
            <ul className={css.list}>
        {contacts.map((contact) => {
          return (
            <li className={css.item} key={contact.id}>
              <Contact
                key={contact.id}
                id={contact.id}
                name={contact.name}
                number={contact.number}
                onDeleteContact={onDeleteContact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}


      

export default ContactList;

