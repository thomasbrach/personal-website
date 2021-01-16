import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  appbar: {
    width: "100%",
    boxShadow: "none",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  toolbar: {
    justifyContent: "center",
  },
  toolbarLink: {
    margin: theme.spacing(2),
    color: "black",
    fontWeight: "bold",
    fontFamily: "Poppins",
    // transitionDuration: "0.2s",
    // transitionTimingFunction: "ease-in-out",
    // transitionProperty: "all",
    // transitionDelay: "0s",
  },
}));

const sections = [
  { title: "Home", url: "#home" },
  { title: "About", url: "#about" },
  { title: "Resume", url: "#resume" },
  // { title: "Skills", url: "#skills" },
  // { title: "Projects", url: "#projects" },
  // { title: "Posts", url: "#posts" },
  { title: "Contact", url: "#contact" },
];

const NavBar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appbar} color="transparent">
        <Toolbar className={classes.toolbar}>
          {sections.map((section) => (
            <Button
              key={section.title}
              href={section.url}
              size="small"
              className={classes.toolbarLink}
            >
              {section.title}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
