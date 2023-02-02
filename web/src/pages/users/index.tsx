import { Layout } from '../../components/Layout'
import { UserListingTable } from '../../components/Table/UserListingTable'

import { Can } from '../../components/Can'

export default function UserList() {

	return (
		<Layout>
			<Can permissions={['metrics.list']}>
				<UserListingTable />
			</Can>
		</Layout>
	)
}
