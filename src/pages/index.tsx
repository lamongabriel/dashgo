import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function Home () {
	return (
		<Flex w='100vw' minH='100vh' align='center' justify='center'>
			<Flex as='form' w='full' maxW='360px' p={8} rounded={8} flexDir='column' bg='gray.800'>
				<Stack spacing={4}>
					<Input
						name='email'
						type='email'
						label='E-mail'

						title='Your e-mail'
						autoComplete='email'
					/>

					<Input
						name='password'
						type='password'
						label='Password'

						title='Your password'
						autoComplete='current-password'

						helperText='Encrypted and secure environment.'
					/>
				</Stack>
				<Button
					type='submit'
					title='Login'

					mt={6}
					colorScheme='pink'
					size='lg'
				>Login</Button>
			</Flex>
		</Flex>
	)
}
