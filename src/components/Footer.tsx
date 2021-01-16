import { Button, Grid, Icon, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { social } from "../services/data";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(2),
  },

  iconButton: {
    color: theme.palette.primary.light,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },

  copyright: {
    margin: theme.spacing(1),
    fontFamily: "Poppins",
    color: theme.palette.primary.light,
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
        {social.map((socialItem) => (
          <Grid item>
            <Button
              href={socialItem.address}
              target="_blank"
              className={classes.iconButton}
              key={social.indexOf(socialItem)}
            >
              <Icon className={socialItem.icon} />
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid container direction="column" spacing={2} xl={3}>
        <Grid item>
          <Typography align="center" className={classes.copyright}>
            Thomas Brach © {new Date().getFullYear()}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
