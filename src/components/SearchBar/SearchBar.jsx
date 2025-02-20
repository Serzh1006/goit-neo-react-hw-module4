import { Formik, Field, Form } from "formik";
import iziToast from "izitoast";
import { BiSearchAlt } from "react-icons/bi";
import "izitoast/dist/css/iziToast.min.css";
import css from "./searchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const initialValues = {
    value: "",
  };

  const handleSubmit = (values, actions) => {
    if (values.value.trim() === "") {
      iziToast.info({
        title: "Not found!",
        message: "Please enter text!",
        position: "bottomCenter",
      });
      return;
    }
    onSearch(values.value);
    actions.resetForm();
  };

  return (
    <header className={css.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.inputValue}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="value"
          />
          <button className={css.btnSubmit} type="submit">
            <BiSearchAlt />
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
