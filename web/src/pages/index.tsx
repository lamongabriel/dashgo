import { Flex } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { LoginForm } from '../components/Form/LoginForm'
import { withSSRGuest } from '../utils/withSSRGuest'

export default function Home () {
	return (
		<Flex w='100vw' minH='100vh' align='center' justify='center' px={6}>
			<LoginForm />
		</Flex>
	)
}

export const getServerSideProps: GetServerSideProps = withSSRGuest(async () => {
	return {
		props: {}
	}
})
