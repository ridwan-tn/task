import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mainRoot: {
    width: "100%",
    backgroundColor: "black",
  },
  boxmain: {
    marginLeft: "26.5em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-3em",
    },
  },
  box1: {
    marginTop: "-1em",
  },

  box2: {
    background: "rgba(36 36 36)",
    marginTop: "-1em",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    marginLeft: "12rem",
    background: "rgba(18 240 137)",
    fontSize: "0.7em",
  },
  typo1: {
    fontFamily: "",
    fontSize: "1.5em",
    color: "rgba(18 240 137)",
    marginLeft: "-13em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-8em",
    },
  },
  typo1a1: {
    fontFamily: "",
    fontSize: "0.7em",
    color: "white",
    marginLeft: "-12em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-10em",
    },
  },
  typo1a: {
    fontFamily: "poppins",
    fontSize: "0.5em",
    color: "white",
    marginLeft: "-1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-3em",
    },
  },
  typo2: {
    fontFamily: "poppins",
    fontSize: "1em",
  },
  margin: {
    margin: theme.spacing(1),
  },
  rember: {
    fontSize: "0.5em",
  },
}));
