import { type Contact } from "../App";
import "./ContactList.css";
import { contactList } from "../utils/commonUtils";

interface Props {
  contact: Contact;
  onContactChange: (contact: Contact) => void;
}

const ContactList = ({ onContactChange, contact: sContact }: Props) => {
  const contactListItems = contactList.map((contact) => (
    <div className={`card `} key={contact.id}>
      <div
        className={`card-body contactName ${contact.id === sContact.id ? 'activeContact' : 'contact' }`}
        onClick={() => onContactChange(contact)}
      >
        {contact.name}
      </div>
    </div>
  ));
  return (
    <div className={`messengerContactList`}>
      <h3>Contacts</h3>
      {contactListItems}
    </div>
  );
};

export default ContactList;
