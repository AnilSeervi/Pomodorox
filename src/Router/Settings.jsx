import React, { useState } from "react";
import TimeInput from "../Components/TimeInput";
import SetLongBreakInt from "../Components/SetLongBreakInt";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import AutoStart from "../Components/AutoStart";
import ThemeColor from "../Components/ThemeColor";
import ThemeMode from "../Components/ThemeMode";
import Grow from "@material-ui/core/Grow";
import IconButton from "@material-ui/core/IconButton";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Notification from "../Components/Notification";
import Volume from "../Components/Volume";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "0.5rem 0",
    "& .MuiTextField-root": {
      margin: 4,
      width: "18ch",
      maxWidth: "30ch",
      "& .MuiFormLabel-root": {
        fontSize: "clamp(0.9rem,3vw,1rem)",
      },
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
  dailogPaper: {
    margin: 10,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

const Settings = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <IconButton className={classes.iconButton} onClick={handleClickOpen}>
        <SettingsRoundedIcon />
      </IconButton>
      <Dialog
        classes={{ paper: classes.dailogPaper }}
        open={open}
        keepMounted
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="Timer Settings Dialog"
        aria-describedby="Set Timer duration and theme"
      >
        <DialogTitle>Settings</DialogTitle>
        <DialogContent dividers>
          <DialogContentText component="section">
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
            <Notification />
            <Volume />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Settings;
