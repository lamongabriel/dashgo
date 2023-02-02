import { GetServerSideProps } from 'next'

import { CreateUserForm } from '../../components/Form/CreateUserForm'

import { Layout } from '../../components/Layout'

export default function UserList () {
	return (
		<Layout>
			<CreateUserForm />
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {}
	}
}
