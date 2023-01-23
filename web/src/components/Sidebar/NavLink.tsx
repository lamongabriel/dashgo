import { Icon, Link, Text, LinkProps } from '@chakra-ui/react'

import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { IconType } from 'react-icons'
interface NavLinkProps extends LinkProps{
	children: string
	icon: IconType
	href: string
}

export function NavLink ({ icon, children, href, ...rest }: NavLinkProps) {

	const { asPath } = useRouter()

	function checkActiveLink(path: string, href: string) {
		if(path === '/'){
			return href === '/'
		}

		return path.startsWith(href)
	}

	return (
		<Link
			as={NextLink}
			href={href}
			color={checkActiveLink(asPath, href) ? 'pink.400' : 'inherit'}
			display='flex'
			alignItems='center'
			{...rest}
		>
			<Icon as={icon} fontSize={20} />
			<Text fontWeight='medium' ml={4}>{children}</Text>
		</Link>
	)
}
