import Contact from "./Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  //   if (!contacts || contacts.length === 0) {
  //     return <p>No contacts available</p>; // Показуємо повідомлення, якщо контактів немає
  //   }
  return (
    <ul className={s.wrapper}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          {...contact}
          onDelete={() => onDeleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
