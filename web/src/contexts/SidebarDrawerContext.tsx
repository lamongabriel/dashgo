import { createContext, ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'

export const SidebarDrawerContext = createContext<UseDisclosureReturn>({} as UseDisclosureReturn)

interface SidebarDrawerProviderProps {
	children: ReactNode
}

export function SidebarDrawerProvider ({ children }: SidebarDrawerProviderProps) {

	const disclosure = useDisclosure()
	const router = useRouter()

	useEffect(() => {
		disclosure.onClose()
	}, [router.asPath])

	return (
		<SidebarDrawerContext.Provider value={disclosure}>
			{children}
		</SidebarDrawerContext.Provider>
	)
}
