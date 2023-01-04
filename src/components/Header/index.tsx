import Link from 'next/link'

import { Flex, Divider, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react'

import { Logo } from '../Logo'
import { Profile } from './Profile'
import { Notifications } from './Notifications'
import { Search } from './Search'

import { useSidebarDrawer } from '../../hooks/useSidebarDrawer'
import { RiMenuLine } from 'react-icons/ri'

export function Header () {

	const { onOpen } = useSidebarDrawer()

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true
	})

	return (
		<Flex as='header' w='full' h={20} mx='auto' mt={4} align='center' px={6}>

			{!isWideVersion && (
				<IconButton
					display='flex'
					aria-label='Open navigation menu'
					icon={<Icon as={RiMenuLine} />}
					mr={2}
					fontSize={24}
					variant='unstyled'
					onClick={onOpen}
				/>
			)}

			<Link href='/dashboard'><Logo w={isWideVersion ? 48 : 'auto'} /></Link>

			{isWideVersion && <Search />}

			<Flex align='center' ml='auto' pl={[6, 8]}>
				<Notifications />
				<Divider orientation='vertical' height='28px' mx={[6, 8]} borderColor='gray.700' />
				<Profile showProfileData={isWideVersion} />
			</Flex>

		</Flex>
	)
}
