import { Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import { LinkedIn, GitHub } from "@material-ui/icons";
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
          <IconButton href="https://github.com/thomasbrach" target="_blank">
            <GitHub />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            href="https://www.linkedin.com/in/thomasbrach/"
            target="_blank"
          >
            <LinkedIn />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container direction="column" spacing={2} xl={3}>
        <Grid item>
          <Typography align="center">
            Thomas Brach © {new Date().getFullYear()}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
