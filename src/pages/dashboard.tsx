import { SimpleGrid } from '@chakra-ui/react'
import { Chart } from '../components/Chart'

import { Layout } from '../components/Layout'


export default function Dashboard () {
	return (
		<Layout>
			<SimpleGrid flex={1} gap={4} minChildWidth='320px' alignItems='flex-start'>
				<Chart />
				<Chart />
			</SimpleGrid>
		</Layout>
	)
}
