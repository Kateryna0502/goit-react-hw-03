import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css"
const ContactList = ({ contacts, onDeleteProfile }) => {
  return (
    <div>
      
      <ul className={css.list}>{contacts.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact
              contact={contact} onDeleteProfile={onDeleteProfile} />
          </li>
        );
      })}
      </ul>
    </div>
  );
}


      

export default ContactList;

