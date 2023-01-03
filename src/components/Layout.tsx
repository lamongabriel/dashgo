import { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'

import { Header } from './Header'

interface LayoutProps {
	children: ReactNode
}

export function Layout ({children}: LayoutProps) {
	return (
		<Flex flexDir='column' minHeight='100vh' w='100vw' overflowX='hidden'>
			<Header />
			<Flex w='100%' my={6} mx='auto' px={6} maxWidth="1480px" >
				{children}
			</Flex>
		</Flex>
	)
}

