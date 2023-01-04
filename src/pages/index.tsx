import { Flex, Button, Stack } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Input } from '../components/Form/Input'
import { Logo } from '../components/Logo'

interface FormData {
	email: string
	password: string
}

export default function Home () {

	const { register, handleSubmit, formState } = useForm<FormData>()

	const onSubmit: SubmitHandler<FormData> = data => {
		console.log(data)
	}

	return (
		<Flex w='100vw' minH='100vh' align='center' justify='center'>
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

						{...register('email')}
					/>

					<Input
						type='password'
						label='Password'

						title='Your password'
						autoComplete='current-password'

						helperText='Encrypted and secure environment.'

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
		</Flex>
	)
}
