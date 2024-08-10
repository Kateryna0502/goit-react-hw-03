import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css"



const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const ContactValidationSchema = Yup.object().shape({
    contactName: Yup.string()
        .required("Ім'я профілю є обов'язковим")
        .min(3, "Ім'я профілю має бути мінімум в 3 символи")
        .max(50, "Ім'я профілю має бути меншим за 50 символів"),
    contactNumber: Yup.string()
        .matches(
            phoneRegExp,
            "Номер телефону має співпадати з форматом 'xxx-xxx-xx-xx'"
        )
        .required("Номер телефону є обов'язковий"),
    
})

const INITIAL_VALUES = {
  contactName: "",
  contactNumber: "",
  
};

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    const contactObject = {
      name: values.contactName,
      number: values.contactNumber,
      
    };

    onAddContact(contactObject);

    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={ContactValidationSchema}
    >
      
        <Form className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <Field
            type="text"
            name="contactName"
            placeholder="Микола Зозуля"
            
          />
          <ErrorMessage
            className={css.errorText}
            name="contactName"
            component="span"
          />
        </label>

        <label className={css.label}>
          <span>Number</span>
          <Field
            type="tel"
            name="contactNumber"
            placeholder="+(38)0501234567"
            
          />
          <ErrorMessage
            className={css.errorText}
            name="contactNumber"
            component="span"
          />
        </label>
      

        <button  className={css.submitBtn} type="submit">
          Add Contact
        </button>
      </Form>
      
      
    </Formik>
  );
};

export default ContactForm;
