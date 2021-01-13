import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  about: {
    minHeight: "300px",
    backgroundColor: "#DCDBC4",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.about}
      id="about"
    >
      <Grid container direction="column" spacing={2} xl={3}>
        <Grid item component="h1" style={{ alignSelf: "center" }}>
          About
        </Grid>
        <Grid item component="h3" style={{ alignSelf: "center" }}>
          Based in Paris, I am a former Finance guy who decided to learn Web
          Development. I am currently exploring opportunities.
        </Grid>
        <Grid item container justify="center" alignItems="center" spacing={2}>
          <Grid item>1</Grid>
          <Grid item>2</Grid>
          <Grid item>3</Grid>
          <Grid item>4</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
