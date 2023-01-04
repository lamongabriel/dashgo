import {
	Box,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	useBreakpointValue
} from '@chakra-ui/react'

import { NavSideBar } from './NavSideBar'
import { Logo } from '../Logo'

import { useSidebarDrawer } from '../../hooks/useSidebarDrawer'

export function Sidebar() {

	const { isOpen, onClose } = useSidebarDrawer()

	const isDrawerSidebar = useBreakpointValue({
		base: true,
		lg: false
	})

	if(isDrawerSidebar){
		return (
			<Drawer isOpen={isOpen} placement='left' onClose={onClose}>
				<DrawerOverlay>
					<DrawerContent bg='gray.800' p={0}>
						<DrawerCloseButton mt={6}  />
						<DrawerHeader>
							<Flex w='full' h={20} mx='auto' align='center' justifyContent='center'>
								<Logo />
							</Flex>
						</DrawerHeader>
						<DrawerBody>
							<NavSideBar />
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		)
	}

	return (
		<Box as='aside' w={48} mr={8}>
			<NavSideBar />
		</Box>
	)
}
