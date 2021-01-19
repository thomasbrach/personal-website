import { Button, Grid, Icon, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Skills from "../Skills";

const useStyles = makeStyles((theme) => ({
  resume: {
    minHeight: "300px",
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
  },
  resumeTitle: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  resumeText: {
    backgroundColor: "rgba(0,0,0, 0.1)",
    border: "1px solid",
    borderColor: theme.palette.primary.dark,
    padding: theme.spacing(2),
    boxShadow: "",
  },
  button: {
    border: "solid 1px",
    backgroundColor: theme.palette.secondary.dark,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: "white",
      borderColor: "white",
    },
    padding: "1rem",
  },
  highlightHeavy: {
    backgroundColor: theme.palette.secondary.dark,
    color: "white",
    fontWeight: "bold",
  },
  highlightSoft: {
    color: theme.palette.secondary.dark,
    fontWeight: "bold",
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.resume}
      id="about"
    >
      <Grid
        item
        container
        alignItems="center"
        justify="center"
        spacing={4}
        xs={12}
        xl={6}
        sm={10}
        md={8}
        lg={8}
      >
        <Grid item>
          <Typography variant="h4" className={classes.resumeTitle}>
            Resume
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.resumeText}>
            It would be a boring and uninspiring thing to do if I were to
            reproduce here my full resume, when you could simply download it
            with the button below or visit my LinkedIn profile... right?
          </Typography>
        </Grid>
        <Grid item>
          <Button
            type="submit"
            endIcon={<Icon className="fa fa-download" />}
            href="https://drive.google.com/file/d/1mWRb5OCSSEKlkfkGbS60-xBRytjIQNGq/view?usp=sharing"
            target="_blank"
            className={classes.button}
          >
            Download Resume
          </Button>
        </Grid>
        <Grid item>
          <Typography className={classes.resumeText}>
            Instead, I thought I would highlight the key "skills and tools" I
            have some degree of familiarity with and that I believe are relevant
            to my goals.
          </Typography>
        </Grid>
        <Grid item>
          <Skills />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Resume;
