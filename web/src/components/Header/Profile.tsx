import { Flex, Avatar, Box, Text } from '@chakra-ui/react'

interface ProfileProps {
	showProfileData?: boolean
}

export function Profile ({ showProfileData = true}: ProfileProps) {
	return (
		<Flex align='center'>
			{showProfileData && (
				<Box mr={4} textAlign='right'>
					<Text>Gabriel Lamon</Text>
					<Text color='gray.300' fontSize='small'>
					gabriel-lamon@outlook.com
					</Text>
				</Box>
			)}

			<Avatar size='md' name='Gabriel Lamon' src='https://github.com/lamongabriel.png'/>

		</Flex>
	)
}
