import { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'

import { Fade } from 'react-awesome-reveal'

import { Header } from './Header'
import { Sidebar } from './Sidebar'

interface LayoutProps {
	children: ReactNode
}

export function Layout ({children}: LayoutProps) {
	return (
		<Flex flexDir='column' minHeight='100vh' w='100vw' overflowX='hidden' maxWidth="1480px" mx='auto'>
			<Fade>
				<Header />
				<Flex w='100%' my={6} px={6}>
					<Sidebar />
					{children}
				</Flex>
			</Fade>
		</Flex>
	)
}

