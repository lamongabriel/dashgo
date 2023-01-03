import { Flex, Input, Button, Stack, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react'

export default function Home () {
	return (
		<Flex w='100vw' minH='100vh' align='center' justify='center'>
			<Flex as='form' w='full' maxW='360px' p={8} rounded={8} flexDir='column' bg='gray.800'>
				<Stack spacing={4}>

					<FormControl>
						<FormLabel>E-mail</FormLabel>
						<Input
							name='email'
							type='email'
							autoComplete='email'
							title='Your e-mail'

							focusBorderColor='pink.500'
							bgColor='gray.900'
							variant='filled'
							_hover={{
								bgColor: 'gray.900'
							}}
							size='lg'
						/>
					</FormControl>

					<FormControl>
						<FormLabel>Password</FormLabel>
						<Input
							name='password'
							type='password'
							autoComplete='current-password'
							title='Your password'

							focusBorderColor='pink.500'
							bgColor='gray.900'
							variant='filled'
							_hover={{
								bgColor: 'gray.900'
							}}
							size='lg'
						/>
						<FormHelperText>Encrypted and secure environment.</FormHelperText>
					</FormControl>
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
