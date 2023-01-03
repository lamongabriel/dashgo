import { Flex, Divider } from '@chakra-ui/react'

import { Logo } from '../Logo'
import { Profile } from './Profile'
import { Notifications } from './Notifications'
import { Search } from './Search'
import Link from 'next/link'

export function Header () {
	return (
		<Flex as='header' w='full' h={20} mx='auto' mt={4} align='center' px={6}>

			<Link href='/dashboard'><Logo /></Link>
			<Search />

			<Flex align='center' ml='auto'>
				<Notifications />
				<Divider orientation='vertical' height='28px' mx={8} borderColor='gray.700' />
				<Profile />
			</Flex>

		</Flex>
	)
}
