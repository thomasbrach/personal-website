import { Button, Grid, Icon, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { social } from "../../services/data";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundSize: "cover",
    backgroundAttachment: "scroll",
    background: `url(https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=80) no-repeat top center`,
    minHeight: "500px",
    height: "100vh",
  },
  headline: {
    backgroundColor: "rgba(0,0,0, 0.1)",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
  },
  title: {
    color: theme.palette.secondary.dark,
    fontWeight: "bold",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.header}
      id="home"
    >
      <Grid
        container
        direction="column"
        spacing={2}
        className={classes.headline}
        xs={12}
        xl={6}
        sm={10}
        md={8}
        lg={8}
      >
        <Grid item>
          <Typography align="center" variant="h2" className={classes.title}>
            Hi, I'm Thomas.
          </Typography>
        </Grid>
        <Grid item>
          <Typography align="center" variant="h6">
            Based in Paris, I am a former Finance professional who decided to
            learn Web Development and Product Management. I am currently
            exploring opportunities. Welcome to my website!
          </Typography>
        </Grid>
        <Grid item container justify="center" alignItems="center" spacing={4}>
          {social.map((socialItem) => (
            <Grid item>
              <Button
                variant="contained"
                color="default"
                href={socialItem.address}
                target="_blank"
                key={social.indexOf(socialItem)}
                aria-label={socialItem.text}
              >
                <Icon className={socialItem.icon} />
              </Button>
            </Grid>
          ))}
          <Grid item>
            <Button variant="contained" color="default" href="#contact">
              <Icon className="fa fa-paper-plane" />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
