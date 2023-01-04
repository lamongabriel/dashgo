import { Flex } from '@chakra-ui/react'
import { LoginForm } from '../components/Form/LoginForm'

export default function Home () {
	return (
		<Flex w='100vw' minH='100vh' align='center' justify='center' px={6}>
			<LoginForm />
		</Flex>
	)
}
