import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
	isCurrent?: boolean
	pageNumber: number
	onPageChange: (page: number) => void
}

export function PaginationItem({ isCurrent = false, pageNumber, onPageChange }: PaginationItemProps) {
	if(isCurrent){
		return (
			<Button
				size='sm'
				fontSize='xs'
				w={4}
				colorScheme='pink'
				disabled
				_disabled={
					{
						bg: 'pink.500',
						cursor: 'default'
					}
				}
			>
				{pageNumber}
			</Button>
		)
	}

	return (
		<Button
			onClick={() => onPageChange(pageNumber)}
			size='sm'
			fontSize='xs'
			w={4}
			bgColor='gray.700'
			_hover={
				{
					bg: 'gray.500'
				}
			}
		>
			{pageNumber}
		</Button>
	)
}
