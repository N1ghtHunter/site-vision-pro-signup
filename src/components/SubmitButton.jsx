import Button from '@mui/material/Button';
import propTypes from 'prop-types';

const SubmitButton = ({ type = 'submit', disabled, children }) => {
	return (
		<Button
			type={type}
			variant='contained'
			disabled={disabled}
			sx={{
				width: '100%',
				backgroundColor: '#8CFAD0',
				fontWeight: 600,
				fontFamily: 'Poppins, sans-serif',
				color: '#000',
				mt: 1,
				boxShadow: 'none',
				textTransform: 'none',
			}}
		>
			{children}
		</Button>
	);
};

SubmitButton.propTypes = {
	type: propTypes.string,
	disabled: propTypes.bool,
	children: propTypes.string.isRequired,
};

export default SubmitButton;
