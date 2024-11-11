import { Form, Field, Formik } from "formik";

const SearchBox = ({ searchQuery, onChange }) => {
  return (
    <Formik>
      <Form>
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
