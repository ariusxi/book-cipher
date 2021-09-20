import React from 'react';
import ReactDOM from 'react-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles'

import './index.css'

import Home from './main/Home';

const theme = createTheme({
	palette: {
		primary: {
			light: '#757ce8',
			main: '#3f50b5',
			dark: '#002884',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000',
		},
		mode: 'dark',
	},
})

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Home />
	</ThemeProvider>,
  	document.getElementById('root')
);
