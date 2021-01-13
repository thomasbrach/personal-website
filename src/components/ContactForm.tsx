import { Button, Snackbar } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import React, { useState } from "react";
import Alert from "./Alert";
import FormTextInput from "./FormTextInput";

type Fields = {
  user_name: string;
  user_email: string;
  message: string;
};

const initialValues = {
  user_name: "",
  user_email: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  user_name: Yup.string().required(),
  user_email: Yup.string().required().email(),
  message: Yup.string().required(),
});

type Toast = {
  open: boolean;
  severity: "error" | "success" | "info" | "warning" | undefined;
  message: string;
};

const ContactForm = () => {
  const initialToast = { open: false, severity: undefined, message: "" };

  const [toast, setToast] = useState<Toast>(initialToast);

  const { open, severity, message } = toast;

  const handleSubmit = async (event: any, helpers: FormikHelpers<Fields>) => {
    const { setSubmitting } = helpers;

    try {
      setSubmitting(true);
      await emailjs.send(
        "gmail_service",
        "contact_form",
        {
          user_name: event.user_name,
          user_email: event.user_email,
          message: event.message,
        },
        process.env.REACT_APP_EMAIL_JS_USER_ID
      );
      setToast({
        open: true,
        severity: "success",
        message: "Your message has been successfully sent!",
      });
    } catch (error) {
      console.log(error);
      setToast({
        open: true,
        severity: "error",
        message: error.text,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid, isSubmitting, errors }) => (
          <Form>
            <FormTextInput
              name="user_name"
              label="Your Name"
              placeholder="Your Name"
              type="text"
              required
              inputSize="small"
              fullWidth
            />
            <FormTextInput
              name="user_email"
              label="Your Email"
              placeholder="Your Email"
              type="email"
              required
              inputSize="small"
              fullWidth
            />
            <FormTextInput
              name="message"
              label="Your Message"
              placeholder="Your Message"
              inputSize="small"
              required
              type="text"
              multiline
              rows={6}
              fullWidth
            />
            <Button
              type="submit"
              fullWidth
              disabled={!dirty || !isValid || isSubmitting}
              endIcon={<SendIcon />}
            >
              Send Message
            </Button>
          </Form>
        )}
      </Formik>
      <Snackbar open={open} autoHideDuration={2000}>
        <Alert
          severity={severity}
          message={message}
          onClose={() => setToast(initialToast)}
        />
      </Snackbar>
    </>
  );
};

export default ContactForm;
