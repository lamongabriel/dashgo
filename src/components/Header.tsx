import { Flex, Icon, Input } from '@chakra-ui/react'
import { Logo } from './Logo'

import { RiSearchLine } from 'react-icons/ri'

export function Header () {
	return (
		<Flex
			as='header'
			w='full'
			maxW={1480}
			h={20}
			mx='auto'
			mt={4}
			align='center'
			px={6}
		>
			<Logo />

			<Flex
				as='label'
				flex={1}
				py={4}
				px={8}
				ml={6}
				maxW='400px'
				alignSelf='center'
				position='relative'
				color='gray.200'
				bg='gray.800'
				borderRadius='full'
				align='center'

				cursor='text'
				title='Search the platform'
				htmlFor='search'
			>
				<Input
					id='search'
					name='search'
					color='gray.50'
					variant='unstyled'
					px={4}
					mr={4}
					placeholder='Search the platform'
					_placeholder={{color: 'gray.400'}}
				/>
				<Icon as={RiSearchLine} fontSize={20} />
			</Flex>
		</Flex>
	)
}
