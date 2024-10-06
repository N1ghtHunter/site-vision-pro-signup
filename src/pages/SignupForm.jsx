import { Box, Typography, Container } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import FormInput from '../components/FormInput';
import SubmitButton from '../components/SubmitButton';
import { toast } from 'react-toastify';
import { signupSchema as schema } from '../schemas/signup.schema';

const SignupForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors, isValid, isSubmitting: isLoading },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onChange',
	});

	// Form submission
	const onSubmit = async (formData) => {
		try {
			if (!isValid || isLoading) return;
			const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
			console.log('Success:', response.data);
			toast.success('Account created successfully');
		} catch (error) {
			console.error('Error submitting the form:', error);
			toast.error('Error creating account');
		}
	};

	return (
		<Container
			disableGutters
			maxWidth={false}
			sx={{ maxWidth: '360px', paddingLeft: { xs: '16px', lg: '0' }, paddingRight: { xs: '16px', lg: '0' } }}
		>
			<Box
				component='form'
				sx={{
					mt: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
				onSubmit={handleSubmit(onSubmit)} // use handleSubmit from react-hook-form
			>
				<img
					src='/Logo@2x.png'
					alt='website logo'
					className='logo'
				/>
				<Typography
					variant='h4'
					align='center'
					gutterBottom
					sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', fontWeight: 600 }}
				>
					Create an account
				</Typography>
				<Typography
					variant='subtitle1'
					align='center'
					fontWeight={400}
					marginBottom={4}
				>
					We set you up quickly.
				</Typography>

				{/* Name field */}
				<Controller
					name='name'
					control={control}
					render={({ field }) => (
						<FormInput
							label='Name and Last Name'
							type='text'
							{...field}
							error={!!errors.name}
							helperText={errors.name?.message}
						/>
					)}
				/>

				{/* Email field */}
				<Controller
					name='email'
					control={control}
					render={({ field }) => (
						<FormInput
							label='Email'
							type='email'
							{...field}
							error={!!errors.email}
							helperText={errors.email?.message}
						/>
					)}
				/>

				{/* Password field */}
				<Controller
					name='password'
					control={control}
					render={({ field }) => (
						<FormInput
							label='Choose Password'
							type='password'
							{...field}
							error={!!errors.password}
							helperText={errors.password?.message}
						/>
					)}
				/>

				{/* Confirm Password field */}
				<Controller
					name='confirmPassword'
					control={control}
					render={({ field }) => (
						<FormInput
							label='Confirm Password'
							{...field}
							type='password'
							error={!!errors.confirmPassword}
							helperText={errors.confirmPassword?.message}
						/>
					)}
				/>

				<SubmitButton
					disabled={isLoading || !isValid}
					isLoading={isLoading}
				>
					{isLoading ? 'Getting you started...' : 'Get Started'}
				</SubmitButton>
				<Typography
					variant='subtitle1'
					align='center'
					fontWeight={400}
					fontSize={12}
					color='#717171'
					marginTop={4}
				>
					Already have an account?{' '}
					<a
						href='#'
						style={{ color: '#70C8A6', textDecoration: 'none' }}
					>
						Log in
					</a>
				</Typography>
			</Box>
		</Container>
	);
};

export default SignupForm;
