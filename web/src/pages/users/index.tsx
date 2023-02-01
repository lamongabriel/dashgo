import { Layout } from '../../components/Layout'
import { UserListingTable } from '../../components/Table/UserListingTable'
import { useCan } from '../../hooks/useCan'

import { Text } from '@chakra-ui/react'

export default function UserList() {

	const canUserSeeListing = useCan({
		permissions: ['metrics.list']
	})

	return (
		<Layout>
			{
				canUserSeeListing ?	<UserListingTable />
					: (
						<Text>
							You do not have permission to access this content
						</Text>
					)
			}
		</Layout>
	)
}
