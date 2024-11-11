const Contact = ({ id, name, number }) => {
  return (
    <div>
      <li>
        <p>{name}</p>
        <p>{number}</p>
        <button>Delete</button>
      </li>
    </div>
  );
};
export default Contact;
