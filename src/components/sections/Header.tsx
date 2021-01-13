import { Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import { GitHub, LinkedIn, Mail } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundSize: "cover",
    backgroundAttachment: "scroll",
    background: `#161415 url(https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=80) no-repeat top center`,
    minHeight: "500px",
    height: "100vh",
  },
  headline: {
    backgroundColor: "rgba(0,0,0, 0.1)",
    borderRadius: "1rem",
    padding: "1rem",
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
        xl={6}
      >
        <Grid item>
          <Typography align="center" variant="h2">
            Hi, I'm Thomas.
          </Typography>
        </Grid>
        <Grid item>
          <Typography align="center" variant="h5">
            Based in Paris, I am a former Finance guy who decided to learn Web
            Development. I am currently exploring opportunities.
          </Typography>
        </Grid>
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
          <Grid item>
            <IconButton href="#contact">
              <Mail />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
