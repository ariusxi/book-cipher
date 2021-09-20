import React, { useState } from 'react'

import { 
	Box, 
	Button,
	Grid,
	TextField,
} from '@mui/material'

const Decode = _ => {
	const [originalText, setOriginalText] = useState('')
	const [coordinatesText, setCoordinatesText] = useState('')
	const [resultQuote, setResultQuote] = useState('')

	const findLetterByRow = (row, index) => {
		const rows = originalText.toLowerCase().split('\n')

		return rows[row - 1].charAt(index - 1)
	}

	const handleTranslate = () => {
		let textTranslated = ""
		const positions = coordinatesText.split('\n')

		if (originalText === '' || coordinatesText === '') {
			return
		}

		for (const position of positions) {
			const [row, pos] = position.split(':')
			textTranslated += findLetterByRow(row, pos)
		}

		setResultQuote(textTranslated)
	}

	return (
		<Box component="form">
			<Grid 
				item
				sx={{ m: 2 }}
				xs={12}>
				<TextField 
					id="originalText"
					label="Original Text"
					type="textarea"
					rows="3"
					size="large"
					multiline
					value={originalText}
					onChange={(e) => setOriginalText(e.target.value)}/>
			</Grid>
			<Grid
				item
				sx={{ m: 2 }}
				xs={12}>
				<TextField
					id="coordinatesText"
					label="Text Coordinates"
					type="textarea"
					size="large"
					rows="3"
					multiline
					value={coordinatesText}
					onChange={(e) => setCoordinatesText(e.target.value)}/>
			</Grid>
			<Grid
				item
				sx={{ m: 2 }}
				xs={12}>
				<TextField
					id="resultQuote"
					label="Result"
					readOnly
					value={resultQuote}/>
			</Grid>
			<Grid item xs={12}>
				<Button 
					variant="contained"
					onClick={handleTranslate}>
					Translate
				</Button>
			</Grid>
		</Box>
	)
}

export default Decode