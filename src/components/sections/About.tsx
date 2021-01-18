import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  about: {
    minHeight: "300px",
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(2),
  },
  profile: {
    borderRadius: "100rem",
    height: "10rem",
    width: "10rem",
  },
  aboutTitle: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  aboutText: {
    backgroundColor: "rgba(0,0,0, 0.1)",
    border: "1px solid",
    borderColor: theme.palette.primary.dark,
    padding: theme.spacing(2),
    boxShadow: "",
    marginBottom: theme.spacing(2),
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
      <Grid
        item
        container
        alignItems="center"
        justify="center"
        spacing={2}
        xs={12}
        xl={6}
        sm={10}
        md={8}
        lg={8}
      >
        <Grid item>
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQFN_r0todW_Vw/profile-displayphoto-shrink_400_400/0/1571390747888?e=1616630400&v=beta&t=tde56SEgqSI5qBlI7g4o4B7rLV0AiZv6jNdcBZ5jD-Q"
            alt="profile"
            className={classes.profile}
          />
        </Grid>
        <Grid item container alignItems="center" justify="center" spacing={2}>
          <Grid item>
            <Typography variant="h4" className={classes.aboutTitle}>
              About Me
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.aboutText}>
              After{" "}
              <span className={classes.highlightSoft}>
                four years in Finance
              </span>
              , during which I honed my presentation skills, strategic mindset,
              modelling capabilities as well as deep financial understanding, I
              felt that{" "}
              <span className={classes.highlightSoft}>
                I needed a radical change
              </span>
              .
              <br />
              <br />
              Since I had always been interested in tech companies and the
              startup ecosystem, I decided to embark on a new learning path.
              From mid-2020 to today, I've been learning{" "}
              <span className={classes.highlightSoft}>
                Web Development
              </span>{" "}
              (hence this website), started to tinker with Design and Data, and
              explored{" "}
              <span className={classes.highlightSoft}>Product Management</span>{" "}
              topics.
              <br />
              <br />
              My ambition for 2021 is to either successfully{" "}
              <span className={classes.highlightSoft}>
                launch a company of my own
              </span>{" "}
              thanks to my newly acquired skills, or to{" "}
              <span className={classes.highlightSoft}>
                join a startup with a product I love as a PM
              </span>{" "}
              - should a great opportunity arise!
              <br />
              <br />
              I am a geek at heart, with an entrepreneurial spirit, a knack for
              finance, and a newly-discovered passion for all things product.
              <br />
              <br />
              <i>
                If you don't find me coding, reading business books or coming up
                with new entrepreneurial ideas, I'm probably doing one of these:
                <br /> - Reading Science-Fiction, Horror and Fantasy literature
                (hello Tolkien, Lovecraft) <br /> - Climbing the Hearthstone
                Wild ladder to finish at least Diamond every month <br />-
                Mastering games of the Call of Cthulhu or Legend of the Five
                Rings RPGs with my group of players
                <br /> - Painting 32mm miniatures
              </i>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
