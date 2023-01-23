import { HStack, Icon } from '@chakra-ui/react'

import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function Notifications (){
	return (
		<HStack spacing={[6, 8]} color='gray.300'>
			<Icon as={RiNotificationLine} fontSize={20} />
			<Icon as={RiUserAddLine} fontSize={20} />
		</HStack>
	)
}
