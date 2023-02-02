import { Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { useCan } from '../hooks/useCan'

interface CanProps {
	children: ReactNode
	permissions?: string[]
	roles?: string[ ]
}

export function Can ({ children, permissions, roles }: CanProps) {

	const userCanSeeComponent = useCan({
		permissions,
		roles
	})

	if(!userCanSeeComponent) {
		return (
			<Text>
				You do not have permission to access this data.
			</Text>
		)
	}

	return (
		<>
			{children}
		</>
	)
}
