import { SimpleGrid } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { Chart } from '../components/Chart'

import { Layout } from '../components/Layout'
import { withSSRAuth } from '../utils/withSSRAuth'

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

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
	return {
		props: {}
	}
})
