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
	Text
} from '@chakra-ui/react'

import { Layout } from '../../components/Layout'

import { RiAddLine } from 'react-icons/ri'
import { Pagination } from '../../components/Pagination'

export default function UserList () {
	return (
		<Layout>
			<Box flex={1} borderRadius={8} bg='gray.800' p={8}>
				<Flex mb={8} justify='space-between' align='center'>
					<Heading size='lg' fontWeight='normal'>
						Users
					</Heading>
					<Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon fontSize={20} as={RiAddLine} />}>
						New
					</Button>
				</Flex>
				<Table colorScheme='whiteAlpha'>
					<Thead>
						<Tr>
							<Th px={6} color='gray.300' width={8}>
								<Checkbox colorScheme='pink'/>
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
						<Tr>
							<Td px={6}>
								<Checkbox colorScheme='pink'/>
							</Td>
							<Td>
								<Box>
									<Text fontWeight='bold'>Gabriel Lamon</Text>
									<Text fontSize='small' color='gray.300'>gabriel-lamon@outlook.com</Text>
								</Box>
							</Td>
							<Td>
								May 11, 2013
							</Td>
						</Tr>
					</Tbody>
				</Table>
				<Pagination />
			</Box>
		</Layout>
	)
}
