import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from '@chakra-ui/react'
import { NavSideBar } from './NavSideBar'


export function Sidebar() {

	const isDrawerSidebar = useBreakpointValue({
		base: true,
		lg: false
	})

	if(isDrawerSidebar){
		return (
			<Drawer isOpen={true} placement='left' onClose={() => {''}}>
				<DrawerOverlay>
					<DrawerContent bg='gray.800' p={4}>
						<DrawerCloseButton mt={6} />
						<DrawerHeader>Navigation</DrawerHeader>
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
