import React from "react";
import WhatshotRoundedIcon from "@material-ui/icons/WhatshotRounded";
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core";
import { useTimerContext } from "../Hooks/Context";

const useStyles = makeStyles((theme) => ({
  badge: {
    position: "fixed",
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const Streak = () => {
  const classes = useStyles();
  const { streak } = useTimerContext();
  return (
    <Badge
      className={classes.badge}
      color="primary"
      badgeContent={streak.current}
      showZero
    >
      <WhatshotRoundedIcon fontSize="large" color="disabled" />
    </Badge>
  );
};

export default Streak;
