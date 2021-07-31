import React, { useState, useEffect } from "react";
import Slider from "@material-ui/core/Slider";
import IconButton from "@material-ui/core/IconButton";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import { useSoundContext } from "../Hooks/Sound";
import { sounds } from "../Helpers/sounds";

const Volume = () => {
  const { sound } = useSoundContext();
  const [volume, setVolume] = useState(50);
  const isMuted = volume === 0;

  const updateVolume = () => {
    sounds.forEach((i) => (i.audio.volume = volume / 100));
  };
  useEffect(() => {
    updateVolume();
  }, [volume]);

  const handleVolumeChange = (event, value) => {
    setVolume(value);
    sound.play();
  };

  const handleMuteButtonClick = () => {
    setVolume(0);
  };

  const handleMaxVolumeButtonClick = () => {
    setVolume(100);
  };
  return (
    <div className="volume-slider">
      <IconButton color="inherit" onClick={handleMuteButtonClick}>
        {isMuted ? <VolumeOffIcon /> : <VolumeDownIcon />}
      </IconButton>
      <Slider
        value={volume}
        step={1}
        onChange={handleVolumeChange}
        aria-labelledby="volume-slider"
      />
      <IconButton color="inherit" onClick={handleMaxVolumeButtonClick}>
        <VolumeUpIcon />
      </IconButton>
    </div>
  );
};

export default Volume;
