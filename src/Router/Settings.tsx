import React, { useState } from "react"
import TimeInput from "../Components/TimeInput"
import SetLongBreakInt from "../Components/SetLongBreakInt"
import Typography from "@mui/material/Typography"
import { Divider } from "@mui/material"
import { Button } from "@mui/material"
import AutoStart from "../Components/AutoStart"
import ThemeColor from "../Components/ThemeColor"
import ThemeMode from "../Components/ThemeMode"
import Grow from "@mui/material/Grow"
import IconButton from "@mui/material/IconButton"
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { TransitionProps } from "@mui/material/transitions"
import Notification from "../Components/Notification"
import Volume from "../Components/Volume"
import { Theme } from "@mui/material/styles"
import { styled, SxProps } from "@mui/system"

interface DivProps {
	sx?: SxProps
}

const Div = styled("div")<DivProps>({
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
})

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>
	},
	ref: React.Ref<unknown>
) {
	return <Grow ref={ref} {...props} />
})

const Settings = () => {
	const [open, setOpen] = useState(false)
	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}
	return (
		<>
			<IconButton
				sx={{
					position: "absolute",
					top: (theme: Theme) => theme.spacing(1),
					right: (theme: Theme) => theme.spacing(1),
				}}
				onClick={handleClickOpen}
			>
				<SettingsRoundedIcon />
			</IconButton>
			<Dialog
				sx={{
					"& .MuiPaper-root": {
						backgroundImage: "none",
					},
					margin: 10,
				}}
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
						<Div>
							<TimeInput />
						</Div>
						<Divider sx={{ margin: "1rem 0" }} />
						<SetLongBreakInt />
						<Divider sx={{ margin: "1rem 0" }} />
						<AutoStart />
						<Divider sx={{ margin: "1rem 0" }} />
						<ThemeColor />
						<Divider sx={{ margin: "1rem 0" }} />
						<ThemeMode />
						<Divider sx={{ margin: "1rem 0" }} />
						<Notification />
						<Volume />
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button variant="outlined" color="inherit" onClick={handleClose}>
						OK
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default Settings
