import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { skills } from "../services/data";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    // border: "solid 1px rgb(0,0,0,0.3)",
  },

  rowLayout: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    // border: "solid 1px rgb(0,0,0,0.3)",
    backgroundColor: theme.palette.primary.light,
    boxShadow: "rgba(140, 160, 160, 0.2) 0px 8px 24px",
  },

  rowName: {
    fontFamily: "Poppins",
    color: theme.palette.secondary.dark,
    height: "7rem",
    width: "6rem",
    display: "flex",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    placeItems: "center",
  },

  skillItem: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // border: "solid 1px rgb(0,0,0,0.1)",
    width: "6rem",
    height: "7rem",
  },

  skillIcon: {
    width: "4rem",
    height: "4rem",
    marginBottom: "0.5rem",
  },
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.mainGrid}>
      {skills.map((skillLevel) => (
        <Grid
          item
          container
          // justify="space-evenly"
          key={skillLevel.level}
          className={classes.rowLayout}
        >
          <Grid item className={classes.rowName}>
            <Typography>{skillLevel.level}</Typography>
          </Grid>
          {skillLevel.list.map((skill) => (
            <Grid item key={skill.name} className={classes.skillItem}>
              <img
                src={skill.icon}
                alt={skill.name}
                className={classes.skillIcon}
              />
              <Typography variant="body2">{skill.name}</Typography>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default Skills;
