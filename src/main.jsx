import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignupForm from './pages/SignupForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
const theme = createTheme({
	typography: {
		fontFamily: 'Roboto Flex, sans-serif',
	},
});
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<ToastContainer />
			<CssBaseline />
			<SignupForm />
		</ThemeProvider>
	</React.StrictMode>
);
