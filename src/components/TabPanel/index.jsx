import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const TabPanel = (props) => {
	const {
		children,
		value,
		index,
	} = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography component={'div'}>{children}</Typography>
				</Box>
			)}
		</div>
	)

}

export default TabPanel