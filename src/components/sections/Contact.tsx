import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import ContactForm from "../ContactForm";

const useStyles = makeStyles((theme) => ({
  contact: {
    minHeight: "300px",
    backgroundColor: "#DCDBC4",
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.contact}
      id="contact"
    >
      <Grid item>
        <ContactForm />
      </Grid>
    </Grid>
  );
};

export default Contact;
