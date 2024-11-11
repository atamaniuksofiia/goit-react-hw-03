import { Form, Field, Formik } from "formik";
import s from "./SearchBox.module.css";

const SearchBox = ({ searchQuery, onChange }) => {
  return (
    <Formik>
      <Form className={s.searchBoxName}>
        <label htmlFor="search">Find contacts by name</label>
        <Field
          id="search"
          name="search"
          value={searchQuery}
          placeholder="Search"
          onChange={onChange}
        ></Field>
      </Form>
    </Formik>
  );
};
export default SearchBox;
