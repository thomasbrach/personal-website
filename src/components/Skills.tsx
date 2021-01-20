import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { skills } from "../services/data";

const useStyles = makeStyles((theme) => ({
  MainGrid: {},

  rowLayout: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    border: "solid 1px rgb(0,0,0,0.3)",
    backgroundColor: theme.palette.primary.light,
  },

  rowName: {
    fontFamily: "Poppins",
    color: theme.palette.secondary.dark,
  },

  skillItem: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    alignContent: "center",
  },

  skillIcon: {
    width: "4rem",
    height: "4rem",
  },
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.MainGrid}>
      {skills.map((skillLevel) => (
        <Grid
          item
          container
          key={skillLevel.level}
          className={classes.rowLayout}
        >
          <Grid item>
            <Typography className={classes.rowName}>
              {skillLevel.level}
            </Typography>
          </Grid>
          {skillLevel.list.map((skill) => (
            <Grid item key={skill.name} className={classes.skillItem}>
              <img
                src={skill.icon}
                alt={skill.name}
                className={classes.skillIcon}
              />
              <Typography>{skill.name}</Typography>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default Skills;
