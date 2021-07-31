import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core";
import { sounds } from "../Helpers/sounds";
import { useSoundContext } from "../Hooks/Sound";

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 140,
  },
  padding: {
    padding: "10px 10px 10px",
  },
}));
const Notification = () => {
  const { setSound, sound } = useSoundContext();
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  const handleChange = (e) => {
    setIndex(e.target.value);
  };
  const handlePlay = (i) => {
    sound.pause();
    sound.currentTime = 0;
    i.audio.play();
    setSound(i.audio);
  };

  return (
    <div className="notify-panel">
      <Typography variant="subtitle1">Alarm Sound</Typography>
      <FormControl variant="filled" className={classes.formControl}>
        <Select
          classes={{ filled: classes.padding }}
          value={index}
          onChange={handleChange}
          inputProps={{ "aria-label": "Set Notification sound" }}
        >
          {sounds.map((i, idx) => {
            return (
              <MenuItem onClick={() => handlePlay(i)} key={idx} value={idx}>
                {i.text}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default Notification;
