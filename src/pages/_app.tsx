import type { AppProps } from 'next/app'

import { ReactQueryDevtools } from 'react-query/devtools'

import { QueryClientProvider } from 'react-query'
import { queryClient } from '../services/queryClient'
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
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<SidebarDrawerProvider>
					<Component {...pageProps} />
				</SidebarDrawerProvider>
			</ChakraProvider>

			<ReactQueryDevtools />
		</QueryClientProvider>
	)
}
