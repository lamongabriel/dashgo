import { Flex, Button, Stack } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from './Input'
import { Logo } from '../Logo'

interface FormData {
	email: string
	password: string
}

const signInFormSchema = yup.object().shape({
	email: yup.string().required('E-mail is required.').email('Must be a valid E-mail.'),
	password: yup.string().required('Password is required.')
})

export function LoginForm () {

	const { register, handleSubmit, formState } = useForm<FormData>({
		resolver: yupResolver(signInFormSchema)
	})

	const onSubmit: SubmitHandler<FormData> = data => {
		console.log(data)
	}

	return (
		<Flex
			as='form'
			onSubmit={handleSubmit(onSubmit)}
			w='full'
			maxW='360px'
			p={8}
			rounded={8}
			flexDir='column'
			bg='gray.800'
		>
			<Stack spacing={4}>

				<Logo w='full' textAlign='center' />

				<Input
					type='email'
					label='E-mail'

					title='Your e-mail'
					autoComplete='email'

					errors={formState.errors.email}
					{...register('email')}
				/>

				<Input
					type='password'
					label='Password'

					title='Your password'
					autoComplete='current-password'

					helperText='Encrypted and secure environment.'

					errors={formState.errors.password}
					{...register('password')}
				/>
			</Stack>
			<Button
				type='submit'
				title='Login'

				mt={6}
				colorScheme='pink'
				size='lg'

				isLoading={formState.isSubmitting}
			>
			Login
			</Button>
		</Flex>
	)
}
