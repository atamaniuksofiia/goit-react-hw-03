import s from "./Contact.module.css";
const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={s.contactWrapper}>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};
export default Contact;
