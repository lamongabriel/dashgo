import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	SimpleGrid,
} from '@chakra-ui/react'
import { Input } from '../../components/Form/Input'

import { Layout } from '../../components/Layout'

export default function UserList () {
	return (
		<Layout>
			<Box flex={1} borderRadius={8} bg='gray.800' p={8}>
				<Heading size='lg' fontWeight='normal'>
					Create new user
				</Heading>
				<Divider my={6} borderColor='gray.700' />
				<Box as='form'>
					<SimpleGrid minChildWidth='300px' alignItems='center' justifyContent='between' gap={8}>
						<Input
							id='name'
							name='name'
							type='text'
							label='Full name'
							isRequired

							title='Full name'
							autoComplete='name'
						/>
						<Input
							id='email'
							name='email'
							type='email'
							label='E-mail'
							isRequired

							title='E-mail'
							autoComplete='email'
						/>
					</SimpleGrid>
					<SimpleGrid minChildWidth='300px' alignItems='center' justifyContent='between' gap={8} mt={6}>
						<Input
							id='password'
							name='password'
							type='password'
							label='Password'
							isRequired

							title='Password'
							autoComplete='new-password'
						/>
						<Input
							id='passwordConfirmation'
							name='passwordConfirmation'
							type='password'
							label='Password Confirmation'
							isRequired

							title='Password Confirmation'
							autoComplete='new-password'
						/>
					</SimpleGrid>
					<Flex gap={4} align='center' justify='flex-end' mt={8}>
						<Button
							type='button'
							colorScheme='whiteAlpha'
						>
							Cancel
						</Button>
						<Button
							colorScheme='pink'
							type='submit'
						>
							Save
						</Button>
					</Flex>
				</Box>
			</Box>
		</Layout>
	)
}
