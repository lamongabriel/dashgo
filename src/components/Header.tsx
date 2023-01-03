import { Flex,  } from '@chakra-ui/react'
import { Logo } from './Logo'

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
		</Flex>
	)
}
