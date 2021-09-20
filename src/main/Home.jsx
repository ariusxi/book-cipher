import React, { Component } from "react"

import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

import Tabs from './../components/Tabs'
import Decode from './components/Decode'
import Encode from './components/Encode'

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}))

class Home extends Component {

	state = {
		currentTab: 0,
	}

	constructor(props) {
		super(props)

		this.handleChangeTab = this.handleChangeTab.bind(this)
	}

	handleChangeTab(_, value) {
		this.setState({
			currentTab: value,
		})
	}

	render() {
		return (
			<Box sx={{ flexGrow: 1 }}>
				<Grid 
					container
					spacing={2}>
					<Grid item xs={12}>
						<Item>
							<h3>Book Cipher</h3>
						</Item>
					</Grid>
					<Grid item xs={12}>
						<Item>
							<Tabs
								value={this.state.currentTab}
								onChange={this.handleChangeTab}
								tabs={{
									headers: [{
										label: 'Encode',
									}, {
										label: 'Decode',
									}],
									sections: [{
										children: (<Encode/>),
									}, {
										children: (<Decode/>),
									}],
								}}/>
						</Item>
					</Grid>
				</Grid>
			</Box>
		)
	}

}

export default Home;
