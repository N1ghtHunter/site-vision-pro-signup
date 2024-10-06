import { Box, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const FormInput = ({ label, type, value, onChange, error, helperText, name }) => {
	return (
		<Box sx={{ mb: 2, width: '100%' }}>
			<Typography
				variant='body1'
				sx={{ mb: 0.5 }}
				fontWeight={500}
				fontSize={12}
				color='#717171'
			>
				{label} <span style={{ color: 'red' }}>*</span>
			</Typography>
			<TextField
				// variant='outlined'
				fullWidth
				type={type}
				value={value}
				onChange={onChange}
				error={error}
				helperText={helperText}
				name={name}
				required
				size='small'
				sx={{
					borderRadius: '5px',
					outline: 'none',
					'& .MuiInputBase-input': {
						fontSize: '14px',
						fontWeight: 400,
						color: '#000000',
					},
					'& .MuiOutlinedInput-root': {
						backgroundColor: '#ffffff',
						'& fieldset': {
							borderColor: '#E8E7F5', // Custom border color
						},
						'&:hover fieldset': {
							borderColor: '#E8E7F5', // Custom border color on hover
						},
						'&.Mui-focused fieldset': {
							borderColor: '#E8E7F5', // Custom border color when focused
						},
					},
				}}
				slotProps={{
					formHelperText: { sx: { background: 'transparent' } },
				}}
			/>
		</Box>
	);
};

FormInput.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.bool,
	helperText: PropTypes.string,
};

export default FormInput;
