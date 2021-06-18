import React from "react";

import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./talentStyle";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 10,
    position: "relative",
    color: "grey",
    backgroundColor: theme.palette.common.gray,
    border: "1px solid rgba(18 240 137)",
    fontSize: 10,
    width: "20em",
    padding: "5px 5px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {},
  },
}))(InputBase);
export default function Talent() {
  const classes = useStyles();

  return (
    <div className={classes.mainRoot} style={{ height: "100%" }}>
      <Box
        display="flex"
        p={1}
        
        flexWrap="wrap"
        justifyContent="center"
        css={{ maxWidth: 500 }}
        className={classes.boxmain}
      >
        <Box p={0} flexGrow={1}>
          <Typography align="center" className={classes.typo1}>
            Fanconvo
          </Typography>
          <Typography align="center" className={classes.typo1a1}>
            A marketplace for convertions,mentership and performance
          </Typography>
        </Box>
        <Box p={1}>
          <Typography align="center" className={classes.typo1a}>
            Sign UP
          </Typography>
        </Box>
        <Box p={1}>
          <Typography align="center" className={classes.typo1a}>
            Login
          </Typography>
        </Box>
      </Box>

      <Box
        display="flex"
        p={0}
        flexWrap="wrap"
        justifyContent="center"
        css={{ maxWidth: 500 }}
        className={classes.boxmain}
        mt={0}
      >
        <Box p={1}>
          <Typography align="center" className={classes.typo1a1}>
            Search New Talent
          </Typography>
        </Box>
        <Box p={1} ml={3}>
          <FormControl className={classes.mawsrgin}>
            <BootstrapInput id="bootstrap-input" />
          </FormControl>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" p={2} mt={0}>
        <Box
          p={1}
          bgcolor="grey.600"
          className={classes.box2}
          borderRadius="20px"
          css={{ width: 500 }}
        >
          <Typography align="center" className={classes.typo2}>
            Create your Fan Account{" "}
          </Typography>
          <Box ml={20}>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" color="white  ">
                Sign
              </Button>
              <Button variant="secondary">Talent</Button>
            </ButtonGroup>
          </Box>
          <form className={classes.form} noValidate>
            <Box marginLeft="8em">
              <FormControl className={classes.margin}>
                <Typography style={{ fontSize: "0.6em" }}>Bootstrap</Typography>
                <BootstrapInput defaultValue="last-name" id="bootstrap-input" />
              </FormControl>
            </Box>
            <Box marginLeft="8em">
              <FormControl className={classes.margin}>
                <Typography style={{ fontSize: "0.6em" }}>Bootstrap</Typography>
                <BootstrapInput
                  defaultValue="react-bootstrap"
                  id="bootstrap-input"
                />
              </FormControl>
            </Box>
            <Box marginLeft="8em">
              <FormControl className={classes.margin}>
                <Typography style={{ fontSize: "0.6em" }}>Bootstrap</Typography>
                <BootstrapInput defaultValue="last-name" id="bootstrap-input" />
              </FormControl>
            </Box>
            <Box marginLeft="8em">
              <FormControl className={classes.margin}>
                <Typography style={{ fontSize: "0.6em" }}>Bootstrap</Typography>
                <BootstrapInput defaultValue="last-name" id="bootstrap-input" />
              </FormControl>
            </Box>
            <Box marginLeft="8em">
              <FormControl className={classes.margin}>
                <Typography style={{ fontSize: "0.6em" }}>Bootstrap</Typography>
                <BootstrapInput defaultValue="last-name" id="bootstrap-input" />
              </FormControl>
            </Box>
            <Box marginLeft="8em">
              <FormControl className={classes.margin}>
                <Typography style={{ fontSize: "0.6em" }}>Bootstrap</Typography>
                <BootstrapInput defaultValue="last-name" id="bootstrap-input" />
              </FormControl>
            </Box>
            <Box marginLeft="8em">
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="I agree "
                style={{ fontSize: "0.5em" }}
                className={classes.rember}
              />
            </Box>
            <Button
              type="submit"
              style={{ width: "10em" }}
              variant="contained"
              color="black"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </Box>
        
      </Box>
      <Box
        display="flex"
        p={0}
        flexWrap="wrap"
        justifyContent="center"
        css={{ maxWidth: 500 }}
        className={classes.boxmain}
      >
        <Box p={0} flexGrow={1}>
          <Typography align="center" className={classes.typo1}>
            Fanconvo
          </Typography>
         
          <Box>
          <Typography align="center" className={classes.typo1a1}>
          </Typography>
          </Box>
        </Box>
        <Box p={1}>
          <Typography align="center" className={classes.typo1a}>
            Sign UP
          </Typography>
        </Box>
        <Box p={1}>
          <Typography align="center" className={classes.typo1a}>
            Login
          </Typography>
        </Box>
        
      </Box>

    </div>
  );
}
