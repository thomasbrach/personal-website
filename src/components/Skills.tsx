import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { skills } from "../services/data";

const useStyles = makeStyles({});

const Skills = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      {skills.map((skillLevel) => (
        <Grid item container spacing={4} key={skillLevel.level}>
          <Grid item>{skillLevel.level}</Grid>
          {skillLevel.list.map((skill) => (
            <Grid item key={skill.name}>
              {skill.name}
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default Skills;
