import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { LoginFormContainer, InputsContainer, Title } from "./styles";
import { CONTACT_US_VALUES } from "./types";

// Валидация с помощью yup
const validationSchema = Yup.object().shape({
  [CONTACT_US_VALUES.FULL_NAME]: Yup.string()
    .required("Full name field is required")
    .min(3, "Fullname field should contain min 3 characters")
    .max(50, "Fullname field should contain max 50 characters"),
  [CONTACT_US_VALUES.PHONE]: Yup.string()
    .required("Phone field is required")
    .min(4, "Phone field should contain min 5 characters")
    .max(20, "Phone field should contain max 20 characters"),
  [CONTACT_US_VALUES.EMAIL]: Yup.string()
    .email("This field should be in email format")
    .min(6, "Email field should contain min 5 characters")
    .max(60, "Email field should contain max 20 characters"),
});

function ContactUs() {
  const formik = useFormik({
    initialValues: {
      [CONTACT_US_VALUES.FULL_NAME]: "",
      [CONTACT_US_VALUES.PHONE]: "",
      [CONTACT_US_VALUES.EMAIL]: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      console.log("Formik submit event works!!!");
      console.log(values);
      console.log(helpers);
      helpers.resetForm(); //нужны, чтобы форма очищалась после нажатия на кнопку
    },
  });

  console.log(formik);

  return (
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title>Contact us</Title>
      <InputsContainer>
        <Input
          id="full_name"
          name={CONTACT_US_VALUES.FULL_NAME}
          label="Full name*"
          placeholder="Your full name"
          value={formik.values[CONTACT_US_VALUES.FULL_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_VALUES.FULL_NAME]}
        />
        <Input
          id="phone"
          name={CONTACT_US_VALUES.PHONE}
          label="Phone*"
          placeholder="Your phone number"
          value={formik.values[CONTACT_US_VALUES.PHONE]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_VALUES.PHONE]}
        />
        <Input
          id="email"
          name={CONTACT_US_VALUES.EMAIL}
          label="Email"
          placeholder="Your email"
          value={formik.values[CONTACT_US_VALUES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_VALUES.EMAIL]}
        />
      </InputsContainer>
      <Button name="Send request" type="submit" />
    </LoginFormContainer>
  );
}

export default ContactUs;
