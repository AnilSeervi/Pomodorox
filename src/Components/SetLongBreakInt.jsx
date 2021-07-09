import React from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useTimerContext } from "../Hooks/Context";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const SetLongBreakInt = () => {
  const classes = useStyles();
  const { longBreakInt, setLongBreakInt } = useTimerContext();

  const handleIncr = () => {
    if (longBreakInt > 19) return;
    setLongBreakInt((c) => c + 1);
  };
  const handleDecr = () => {
    if (longBreakInt < 1) return;
    setLongBreakInt((c) => c - 1);
  };

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">Long Break Interval</Typography>
      <ButtonGroup
        disableElevation
        variant="text"
        size="medium"
        color="default"
        aria-label="Set Long break Interval"
      >
        <Button onClick={handleDecr}>
          <ExpandMoreRoundedIcon />
        </Button>
        <Button disabled>
          <Typography variant="body1" color="textPrimary" align="center">
            {longBreakInt}
          </Typography>
        </Button>
        <Button onClick={handleIncr}>
          <ExpandLessRoundedIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default SetLongBreakInt;
