import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ContactForm from "../ContactForm";

const useStyles = makeStyles((theme) => ({
  contact: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(4),
  },

  formTitle: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
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
      direction="column"
    >
      <Grid item>
        <Typography variant="h6" className={classes.formTitle}>
          Want to discuss? I'd love to hear from you! Please give me a shout by
          using the form below.
        </Typography>
      </Grid>
      <Grid item>
        <ContactForm />
      </Grid>
    </Grid>
  );
};

export default Contact;
