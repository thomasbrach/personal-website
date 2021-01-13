import { Grid, makeStyles } from "@material-ui/core";
import { LinkedIn, Mail, GitHub } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    minHeight: "100px",
    backgroundColor: "#FEF9F8",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.footer}
    >
      <Grid item container justify="center" alignItems="center" spacing={4}>
        <Grid item>
          <GitHub />
        </Grid>
        <Grid item>
          <LinkedIn />
        </Grid>
        <Grid item>
          <Mail />
        </Grid>
      </Grid>
      <Grid container direction="column" spacing={2} xl={3}>
        <Grid item component="h1" style={{ alignSelf: "center" }}>
          Thomas Brach © {new Date().getFullYear()}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
