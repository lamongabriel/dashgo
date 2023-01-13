import type { AppProps } from 'next/app'

import { QueryClientProvider, QueryClient  } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'

import { theme } from '../styles/theme'
import '../styles/global.css'

import { mirageServer } from '../services/mirage'
if(process.env.NODE_ENV === 'development') {
	mirageServer()
}

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<SidebarDrawerProvider>
					<Component {...pageProps} />
				</SidebarDrawerProvider>
			</ChakraProvider>
		</QueryClientProvider>
	)
}
