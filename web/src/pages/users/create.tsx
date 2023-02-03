import { GetServerSideProps } from 'next'

import { CreateUserForm } from '../../components/Form/CreateUserForm'

import { Layout } from '../../components/Layout'
import { withSSRAuth } from '../../utils/withSSRAuth'

export default function UserList () {
	return (
		<Layout>
			<CreateUserForm />
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
	return {
		props: {}
	}
}, {
	permissions: ['users.create']
})
