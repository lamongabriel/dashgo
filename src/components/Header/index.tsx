import { Flex, Divider, useBreakpointValue } from '@chakra-ui/react'

import { Logo } from '../Logo'
import { Profile } from './Profile'
import { Notifications } from './Notifications'
import { Search } from './Search'
import Link from 'next/link'

export function Header () {

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true
	})

	return (
		<Flex as='header' w='full' h={20} mx='auto' mt={4} align='center' px={6}>

			<Link href='/dashboard'><Logo /></Link>

			{isWideVersion && <Search />}

			<Flex align='center' ml='auto' pl={[6, 8]}>
				<Notifications />
				<Divider orientation='vertical' height='28px' mx={[6, 8]} borderColor='gray.700' />
				<Profile showProfileData={isWideVersion} />
			</Flex>

		</Flex>
	)
}
