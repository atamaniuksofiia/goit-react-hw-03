import Contact from "./Contact/Contact";

const ContactList = ({ contacts }) => {
  //   if (!contacts || contacts.length === 0) {
  //     return <p>No contacts available</p>; // Показуємо повідомлення, якщо контактів немає
  //   }
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button>Delete</button>
        </li>
      ))}
    </ul>

    // <ul>
    //   {contacts.map((contact) => (
    //     <Contact
    //       key={contact.id}
    //       id={contact.id}
    //       name={contact.name}
    //       number={contact.number}
    //     />
    //   ))}
    // </ul>
  );
};

export default ContactList;
