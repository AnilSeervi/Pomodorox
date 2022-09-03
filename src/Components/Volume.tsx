import { useState, useEffect } from "react"
import Slider from "@mui/material/Slider"
import IconButton from "@mui/material/IconButton"
import VolumeDownIcon from "@mui/icons-material/VolumeDown"
import VolumeOffIcon from "@mui/icons-material/VolumeOff"
import VolumeUpIcon from "@mui/icons-material/VolumeUp"
import { useSoundContext } from "../Hooks/Sound"
import { sounds } from "../Helpers/sounds"

const Volume = () => {
	const { sound } = useSoundContext()
	const [volume, setVolume] = useState<number | number[]>(50)
	const isMuted = volume === 0

	const updateVolume = () => {
		sounds.forEach(
			i =>
				(i.audio.volume = Array.isArray(volume)
					? volume.reduce((a, i) => a + i, 0) / 100
					: volume / 100)
		)
	}
	useEffect(() => {
		updateVolume()
	}, [volume])

	const handleVolumeChange = (event: Event, value: number | number[]) => {
		setVolume(value)
		sound.play()
	}

	const handleMuteButtonClick = () => {
		setVolume(0)
	}

	const handleMaxVolumeButtonClick = () => {
		setVolume(100)
	}
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
	)
}

export default Volume
