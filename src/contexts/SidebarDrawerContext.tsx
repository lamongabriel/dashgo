import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { createContext, ReactNode } from 'react'

const SidebarDrawerContext = createContext<UseDisclosureReturn>({} as UseDisclosureReturn)

interface SidebarDrawerProviderProps {
	children: ReactNode
}

export function SidebarDrawerProvider ({ children }: SidebarDrawerProviderProps) {

	const disclosure = useDisclosure()

	return (
		<SidebarDrawerContext.Provider value={disclosure}>
			{children}
		</SidebarDrawerContext.Provider>
	)
}
