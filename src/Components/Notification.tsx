import { useState } from "react"
import Typography from "@mui/material/Typography"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { Sound, sounds } from "../Helpers/sounds"
import { useSoundContext } from "../Hooks/Sound"

const Notification = () => {
	const { setSound, sound } = useSoundContext()
	const [index, setIndex] = useState(0)

	const handleChange = (e: any) => {
		setIndex(e.target.value)
	}
	const handlePlay = (i: Sound) => {
		sound.pause()
		sound.currentTime = 0
		i.audio.play()
		setSound(i.audio)
	}

	return (
		<div className="notify-panel">
			<Typography variant="subtitle1">Alarm Sound</Typography>
			<FormControl variant="filled" sx={{ minWidth: 140 }}>
				<Select
					sx={{
						padding: "10px 10px 10px",
						".MuiSelect-select": {
							padding: "0",
						},
					}}
					value={index}
					onChange={handleChange}
					inputProps={{ "aria-label": "Set Notification sound" }}
				>
					{sounds.map((i, idx) => {
						return (
							<MenuItem onClick={() => handlePlay(i)} key={idx} value={idx}>
								{i.text}
							</MenuItem>
						)
					})}
				</Select>
			</FormControl>
		</div>
	)
}

export default Notification
