import { Stack, Box, Text } from '@chakra-ui/react'

import { PaginationItem } from './PaginationItem'

interface PaginationProps {
	totalCountOfRegisters: number
	registerPerPage?: number
	currentPage?: number
	onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray (from: number, to: number) {
	const pages = [...new Array(to - from)]
		.map((_, index) => from + index + 1)
		.filter(value => value > 0)

	return pages
}

export function Pagination ({
	totalCountOfRegisters,
	registerPerPage = 10,
	currentPage = 1,
	onPageChange,
}: PaginationProps) {

	const lastPage = Math.ceil(totalCountOfRegisters / registerPerPage)

	const previousPages = currentPage > 1
		? generatePagesArray(currentPage - siblingsCount - 1, currentPage - 1)
		: []

	const nextPages = currentPage < lastPage
		? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
		: []

	return (
		<Stack
			spacing={6}
			direction={['column', 'row']}
			mt={8}
			justifyContent='space-between'
			align='center'
		>
			<Box>
				<strong>0</strong> - <strong>10</strong> of <strong>100</strong>
			</Box>
			<Stack direction='row' spacing={2}>

				{currentPage > (1 + siblingsCount) && (
					<>
						<PaginationItem pageNumber={1} />
						{(currentPage - siblingsCount) > 2 && (
							<Text color='gray.300' w={8} textAlign='center'>...</Text>
						)}
					</>
				)}

				{previousPages.map(page => (
					<PaginationItem key={page} pageNumber={page} />
				))}

				<PaginationItem pageNumber={currentPage} isCurrent/>

				{nextPages.map(page => (
					<PaginationItem key={page} pageNumber={page} />
				))}

				{(currentPage + siblingsCount) < lastPage && (
					<>
						{lastPage - 1 > (currentPage + siblingsCount) && (
							<Text color='gray.300' w={8} textAlign='center'>...</Text>
						)}
						<PaginationItem pageNumber={lastPage} />
					</>
				)}

			</Stack>
		</Stack>
	)
}
