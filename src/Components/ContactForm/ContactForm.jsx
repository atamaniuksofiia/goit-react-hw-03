import { Formik, Form, Field } from "formik";

const ContactForm = ({ setContacts }) => {
  const handleSubmit = (values, options) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: `id-${Date.now()}`, name: values.name, number: values.tel },
    ]);
    options.resetForm();
  };

  const initialValues = {
    username: "",
    tel: "",
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="username">
          Name
          <Field type="text" name="username"></Field>
        </label>
        <label htmlFor="tel">
          Number
          <Field type="tel" name="tel"></Field>
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
