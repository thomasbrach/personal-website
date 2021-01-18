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
      color: theme.palette.secondary.dark,
    },
  },

  copyright: {
    margin: theme.spacing(1),
    fontFamily: "Poppins",
    color: theme.palette.primary.light,
  },

  linkTop: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.dark,
    height: "2rem",
    width: "2rem",
    borderRadius: "50rem",
    marginBottom: theme.spacing(2),
    textAlign: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
      color: "white",
    },
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
      <a href="#home" className={classes.linkTop}>
        <i
          className="fas fa-chevron-up"
          style={{ width: "100%", height: "25%", verticalAlign: "middle" }}
        ></i>
      </a>
      <Grid item container justify="center" alignItems="center" spacing={4}>
        {social.map((socialItem) => (
          <Grid item key={social.indexOf(socialItem)}>
            <Button
              href={socialItem.address}
              target="_blank"
              className={classes.iconButton}
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
