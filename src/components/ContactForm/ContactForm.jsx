import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css"



const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const ContactValidationSchema = Yup.object().shape({
    profileName: Yup.string()
        .required("Ім'я профілю є обов'язковим")
        .min(2, "Ім'я профілю має бути мінімум в 2 символи")
        .max(50, "Ім'я профілю має бути меншим за 50 символів"),
    profileNumber: Yup.string()
        .matches(
            phoneRegExp,
            "Номер телефону має співпадати з форматом 'xxx-xxx-xx-xx'"
        )
        .required("Номер телефону є обов'язковий"),
    profileEmail: Yup.string()
})

const INITIAL_VALUES = {
  profileName: "",
  profileNumber: "",
  
};

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    const contactObject = {
      name: values.contactName,
      phone: values.contactNumber,
      
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
      {({ errors }) => (
        <Form className={css.form}>
        <label className={css.label}>
          <span>Ім&apos;я користувача:</span>
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
          <span>Номер телефону:</span>
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
      )}
      
    </Formik>
  );
};

export default ContactForm;
