import { useState } from 'react'
import NextLink from 'next/link'

import {
	Flex,
	Heading,
	Spinner,
	Button,
	Icon,
	Table,
	Thead,
	Tr,
	Th,
	Checkbox,
	Tbody,
	Td,
	Box,
	Link,
	Text,
	useBreakpointValue
} from '@chakra-ui/react'
import { RiAddLine } from 'react-icons/ri'

import { Pagination } from '../../components/Pagination'

import { useUsers } from '../../hooks/useUsers'
import { queryClient } from '../../services/queryClient'
import axios from 'axios'
import { User } from '../../types/user'

export function UserListingTable() {

	const [page, setPage] = useState(1)

	const { data, isLoading, isFetching, error } = useUsers(page)

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true
	})

	async function handlePrefetchUser(userId: string) {
		await queryClient.prefetchQuery(['user', userId], async () => {
			const { data } = await axios.get(`/api/users/${userId}`)

			return data
		},
		{
			staleTime: 1000 * 60 * 10, // 10 minutes
		}
		)
	}

	return (
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
					as={NextLink}
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
							{data && data.users.length > 0 && (
								data.users.map((user: User, index: number) => (
									<Tr key={index}>
										<Td px={6}>
											<Checkbox colorScheme='pink' />
										</Td>
										<Td>
											<Box>
												<Link color='purple.400' onMouseEnter={() => handlePrefetchUser(user.id)}>
													<Text fontWeight='bold'>{user.name}</Text>
												</Link>
												<Text fontSize='small' color='gray.300'>{user.email}</Text>
											</Box>
										</Td>
										<Td>
											{user.created_at}
										</Td>
									</Tr>
								))
							)}
						</Tbody>
					</Table>

					<Pagination
						totalCountOfRegisters={data?.totalCount || 0}
						currentPage={page}
						onPageChange={setPage}
					/>
				</>
			)}
		</Box>
	)
}
