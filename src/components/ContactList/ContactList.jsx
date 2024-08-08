import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css"
const ContactList = ({ contacts, onDeleteProfile }) => {
  return (
    <div>
      
      <ul className={css.list}>{contacts.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact              
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteProfile={onDeleteProfile} />
          </li>
        );
      })}
      </ul>
    </div>
  );
}


      

export default ContactList;

