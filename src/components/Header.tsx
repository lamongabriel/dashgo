import { Flex, Icon, Input, HStack, Box, Text, Avatar } from '@chakra-ui/react'
import { Logo } from './Logo'

import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header () {
	return (
		<Flex
			as='header'
			w='full'
			maxW="1480px"
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

			<Flex align='center' ml='auto'>
				<HStack spacing={8} mx={8} pr={8} py={1} color='gray.300' borderRightWidth={1} borderColor='gray.700'>
					<Icon as={RiNotificationLine} fontSize={20} />
					<Icon as={RiUserAddLine} fontSize={20} />
				</HStack>

				<Flex align='center'>
					<Box mr={4} textAlign='right'>
						<Text>Gabriel Lamon</Text>
						<Text color='gray.300' fontSize='small'>
							gabriel-lamon@outlook.com
						</Text>
					</Box>

					<Avatar size='md' name='Gabriel Lamon' src='https://github.com/lamongabriel.png'/>

				</Flex>

			</Flex>

		</Flex>
	)
}
