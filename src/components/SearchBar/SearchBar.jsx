import { Formik, Field, Form } from "formik";

const SearchBar = ({ onSearch }) => {
  const initialValues = {
    value: "",
  };

  const handleSubmit = (values, actions) => {
    if (values.value === "") {
      alert("Please enter text");
      return;
    }
    onSearch(values.value);
    actions.resetForm();
  };

  return (
    <header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="value"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
