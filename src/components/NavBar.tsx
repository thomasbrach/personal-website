import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  appbar: {
    boxShadow: "none",
    backgroundColor: "#FFFAF9",
  },
  toolbar: {
    justifyContent: "center",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(2),
    color: "black",
    transitionDuration: "0.2s",
    transitionTimingFunction: "ease-in-out",
    transitionProperty: "all",
    transitionDelay: "0s",
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
