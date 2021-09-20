import React from 'react'

import { 
	Box,
	Tab,
	Tabs as TabsMUI,
} from '@mui/material'

import TabPanel from './../TabPanel'

import './styles.css'

const Tabs = props => {
	const {
		value,
		onChange,
		tabs: { headers, sections },
	} = props

	const a11yProps = (index) => ({
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	})

	return (
		<Box
			className="Tabs"
			sx={{ width: '100%' }}>
			<Box 
				sx={{ 
					borderBottom: 1, 
					borderColor: 'divider',
				}}>
				<TabsMUI
					value={value}
					onChange={onChange}
					arial-label="basic tabs">
					{headers.map((tab, index) => (
						<Tab
							key={index}

							label={tab.label}
							{...a11yProps(index)}/>
					))}
				</TabsMUI>
			</Box>
			{sections.map(({children}, index) => (
				<TabPanel
					key={index}
					index={index}
					value={value}>
					{children}
				</TabPanel>
			))}
		</Box>
	)
}

export default Tabs