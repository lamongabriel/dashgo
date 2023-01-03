import { Icon, Link, Text, LinkProps } from '@chakra-ui/react'

import NextLink from 'next/link'

import { IconType } from 'react-icons'
interface NavLinkProps extends LinkProps{
	children: string
	icon: IconType
	href: string
}

export function NavLink ({ icon, children, href, ...rest }: NavLinkProps) {
	return (
		<Link as={NextLink} href={href} display='flex' alignItems='center' {...rest}>
			<Icon as={icon} fontSize={20} />
			<Text fontWeight='medium' ml={4}>{children}</Text>
		</Link>
	)
}
