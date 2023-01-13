import Link from 'next/link'

import {
	Box,
	Button,
	Checkbox,
	Flex,
	Heading,
	Icon,
	Table,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
	Text,
	useBreakpointValue,
	Spinner
} from '@chakra-ui/react'

import { Layout } from '../../components/Layout'
import { Pagination } from '../../components/Pagination'

import { RiAddLine } from 'react-icons/ri'
import { User } from '../../types/user'
import { useUsers } from '../../hooks/useUsers'

export default function UserList() {

	const { data, isLoading, isFetching, error } = useUsers()
	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true
	})

	return (
		<Layout>
			<Box
				flex={1}
				borderRadius={8}
				bg='gray.800'
				p={8}
				overflow={isWideVersion ? 'hidden' : 'auto'}
				whiteSpace={isWideVersion ? 'normal' : 'nowrap'}
			>
				<Flex mb={8} justify='space-between' align='center'>
					<Heading size='lg' fontWeight='normal'>
						Users
						{!isLoading && isFetching && <Spinner size='sm' color='gray.500' ml={4} />}
					</Heading>
					<Button
						as={Link}
						href='/users/create'
						size='sm'
						fontSize='sm'
						colorScheme='pink'
						leftIcon={<Icon fontSize={20} as={RiAddLine} />}>
						New
					</Button>
				</Flex>
				{isLoading ? (
					<Flex justify='center'>
						<Spinner />
					</Flex>
				) : error ? (
					<Flex justify='center'>
						<Text>Failed loading data.</Text>
					</Flex>
				) : (
					<>
						<Table colorScheme='whiteAlpha'>
							<Thead>
								<Tr>
									<Th px={6} color='gray.300' width={8}>
										<Checkbox colorScheme='pink' />
									</Th>
									<Th>
										USER
									</Th>
									<Th>
										JOIN DATE
									</Th>
								</Tr>
							</Thead>
							<Tbody>
								{data && data.length > 0 && (
									data.map((user: User, index: number) => (
										<Tr key={index}>
											<Td px={6}>
												<Checkbox colorScheme='pink' />
											</Td>
											<Td>
												<Box>
													<Text fontWeight='bold'>{user.name}</Text>
													<Text fontSize='small' color='gray.300'>{user.email}</Text>
												</Box>
											</Td>
											<Td>
												{user.createdAt}
											</Td>
										</Tr>
									))
								)}
							</Tbody>
						</Table>
						<Pagination />
					</>
				)}
			</Box>
		</Layout>
	)
}
