import { Flex, Avatar, Box, Text } from '@chakra-ui/react'

export function Profile () {
	return (
		<Flex align='center'>
			<Box mr={4} textAlign='right'>
				<Text>Gabriel Lamon</Text>
				<Text color='gray.300' fontSize='small'>
				gabriel-lamon@outlook.com
				</Text>
			</Box>

			<Avatar size='md' name='Gabriel Lamon' src='https://github.com/lamongabriel.png'/>

		</Flex>
	)
}
