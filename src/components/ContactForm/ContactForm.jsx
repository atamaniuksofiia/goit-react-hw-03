import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ setContacts }) => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(20, "Name must be less then 20 characters"),
    tel: Yup.string()
      .required("Phone number or email is required")
      .matches(
        /^(\+?\d{1,3}[-.\s]?)?(\(?\d{2,3}\)?[-.\s]?)?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}$/,
        "Phone number is not valid"
      )
      .min(7),
  });

  const handleSubmit = (values, options) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: `id-${Date.now()}`, name: values.username, number: values.tel },
    ]);
    options.resetForm();
  };

  const initialValues = {
    username: "",
    tel: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.contactForm}>
        <label htmlFor="username">
          Name
          <Field type="text" name="username"></Field>
          <ErrorMessage name="username" component="span" />
        </label>
        <label htmlFor="tel">
          Number
          <Field type="tel" name="tel"></Field>
        </label>
        <button type="submit" className={s.contactFormBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
