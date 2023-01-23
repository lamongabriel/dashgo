import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import { SimpleGrid, Flex, Button, Box, Divider, Heading } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from './Input'

import axios  from 'axios'
import { queryClient } from '../../services/queryClient'

interface FormData {
	name: string
	email: string
	password: string
	password_confirmation: string
}

const createUserFormSchema = yup.object().shape({
	name: yup.string().required('Full name is required.'),
	email: yup.string().required('E-mail is required.').email('Must be a valid E-mail.'),
	password: yup.string().required('Password is required.').min(6, 'Must be at least 6 characters.'),
	password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
})

export function CreateUserForm() {
	const router = useRouter()

	const createUser = useMutation(async (user: FormData) => {
		const response = await axios.post('/api/users', {
			user: {
				...user,
				created_at: new Date(),
			}
		})

		return response.data.user
	}, {
		onSuccess: () => {
			queryClient.invalidateQueries('users')
		}
	})

	const { register, handleSubmit, formState } = useForm<FormData>({
		resolver: yupResolver(createUserFormSchema)
	})

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		await createUser.mutateAsync(data)
		router.push('/users')
	}

	return (
		<Box flex={1} borderRadius={8} bg='gray.800' p={[6, 8]}>

			<Heading size='lg' fontWeight='normal'>
				Create new user
			</Heading>

			<Divider my={6} borderColor='gray.700' />

			<Box as='form' onSubmit={handleSubmit(onSubmit)}>
				<SimpleGrid minChildWidth='220px' alignItems='start' justifyContent='between' spacing={[6, 8]}>
					<Input
						id='name'
						type='text'
						label='Full name'

						title='Full name'
						autoComplete='name'

						errors={formState.errors.name}
						{...register('name')}
					/>
					<Input
						id='email'
						type='email'
						label='E-mail'

						title='E-mail'
						autoComplete='email'

						errors={formState.errors.email}
						{...register('email')}
					/>
				</SimpleGrid>
				<SimpleGrid minChildWidth='220px' alignItems='start' justifyContent='between' spacing={[6, 8]} mt={6}>
					<Input
						id='password'
						type='password'
						label='Password'

						title='Password'
						autoComplete='new-password'

						errors={formState.errors.password}
						{...register('password')}
					/>
					<Input
						id='password_confirmation'
						type='password'
						label='Password Confirmation'

						title='Password Confirmation'
						autoComplete='new-password'

						errors={formState.errors.password_confirmation}
						{...register('password_confirmation')}
					/>
				</SimpleGrid>
				<Flex gap={4} align='center' justify='flex-end' mt={8}>
					<Button
						as={Link}
						href='/users'
						type='button'
						colorScheme='whiteAlpha'
					>
						Cancel
					</Button>
					<Button
						colorScheme='pink'
						type='submit'
						isLoading={formState.isSubmitting}
					>
						Save
					</Button>
				</Flex>
			</Box>
		</Box>
	)
}
