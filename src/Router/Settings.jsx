import React from "react";
import Container from "@material-ui/core/Container";
import TimeInput from "../Components/TimeInput";
import SetLongBreakInt from "../Components/SetLongBreakInt";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import AutoStart from "../Components/AutoStart";
import ThemeColor from "../Components/ThemeColor";
import ThemeMode from "../Components/ThemeMode";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
  },
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "0.5rem 0",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "18ch",
      maxWidth: "30ch",
    },
  },
  divider: {
    margin: "1rem 0",
  },
  back: {
    position: "absolute",
    top: theme.spacing(1),
    left: theme.spacing(1),
  },
}));
const Settings = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };
  return (
    <Container
      classes={{ root: classes.container }}
      maxWidth="sm"
      id="settings"
    >
      <IconButton className={classes.back} onClick={handleGoBack}>
        <ArrowBackRoundedIcon />
      </IconButton>
      <Typography variant="h5" align="right" color="textSecondary">
        Settings
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      <Typography variant="subtitle1">
        Duration <Typography variant="caption">(Minutes)</Typography>
      </Typography>
      <div className={classes.root}>
        <TimeInput />
      </div>
      <Divider classes={{ root: classes.divider }} />
      <SetLongBreakInt />
      <Divider classes={{ root: classes.divider }} />
      <AutoStart />
      <Divider classes={{ root: classes.divider }} />
      <ThemeColor />
      <Divider classes={{ root: classes.divider }} />
      <ThemeMode />
      <Divider classes={{ root: classes.divider }} />
    </Container>
  );
};

export default Settings;
