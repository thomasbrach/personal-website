import { Button, Grid, Icon, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { social } from "../../services/data";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundSize: "cover",
    backgroundAttachment: "scroll",
    background: `url(header-picture.jfif) no-repeat top center`,
    minHeight: "500px",
    height: "100vh",
  },
  headline: {
    backgroundColor: "rgba(0,0,0, 0.1)",
    border: "1px solid",
    borderColor: theme.palette.primary.dark,
    padding: theme.spacing(2),
  },
  title: {
    color: theme.palette.secondary.dark,
    fontWeight: "bold",
  },
  subtitle: {
    [theme.breakpoints.down("md")]: { color: "white" },
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
        item
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
          <Typography align="center" variant="h6" className={classes.subtitle}>
            Based in Paris, I am a former Finance professional who decided to
            learn Web Development and Product Management. I am currently
            exploring opportunities. Welcome to my website!
          </Typography>
        </Grid>
        <Grid item container justify="center" alignItems="center" spacing={4}>
          {social.map((socialItem) => (
            <Grid item key={social.indexOf(socialItem)}>
              <Button
                variant="contained"
                color="default"
                href={socialItem.address}
                target="_blank"
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
