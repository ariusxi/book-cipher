import React, { useState } from 'react'

import { 
	Box,
	Button,
	Grid,
	TextField
} from '@mui/material'

const Encode = _ => {
	const [originalText, setOriginalText] = useState('')
	const [quoteText, setQuoteText] = useState('')
	const [coordinatesText, setCoordinatesText] = useState('')

	const findLetter = (letter) => {
		let indexLetter = -1
		let indexRow = -1

		const rows = originalText.toLowerCase().split('\n')

		for (let index = 0; index < rows.length; index++) {
			if (indexLetter === -1) {
				indexRow = index
				indexLetter = rows[index].indexOf(letter)
			}
		}

		return ({
			indexRow: indexRow + 1,
			indexLetter: indexLetter + 1,
		})
	}

	const handleEncript = () => {
		let encriptedText = ""

		const letters = quoteText.split('')
		for (const letter of letters) {
			const { indexRow, indexLetter } = findLetter(letter)
			encriptedText += `${indexRow}:${indexLetter}\n`
		}

		setCoordinatesText(encriptedText)
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
					id="quoteText"
					label="Quote to encript"
					type="text"
					value={quoteText}
					onChange={(e) => setQuoteText(e.target.value)}/>
			</Grid>
			<Grid
				item
				sx={{ m: 2 }}
				xs={12}>
				<TextField
					id="coordinatesText"
					label="Result Coordinates"
					type="textarea"
					size="large"
					rows="3"
					readOnly
					multiline
					value={coordinatesText}/>
			</Grid>
			<Grid
				item
				xs={12}>
				<Button 
					variant="contained"
					onClick={handleEncript}>
					Encript
				</Button>
			</Grid>
		</Box>
	)
}

export default Encode