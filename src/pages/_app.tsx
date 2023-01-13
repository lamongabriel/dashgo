import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'

import { theme } from '../styles/theme'
import '../styles/global.css'

import { mirageServer } from '../services/mirage'
if(process.env.NODE_ENV === 'development') {
	mirageServer()
}

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<SidebarDrawerProvider>
				<Component {...pageProps} />
			</SidebarDrawerProvider>
		</ChakraProvider>
	)
}
