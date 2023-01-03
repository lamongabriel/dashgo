import { Stack } from '@chakra-ui/react'
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function NavSideBar () {
	return (
		<Stack spacing={12} align='flex-start'>
			<NavSection title='GENERAL'>
				<NavLink icon={RiDashboardLine} href='/dashboard'>Dashboard</NavLink>
				<NavLink icon={RiContactsLine} href='/users'>Users</NavLink>
			</NavSection>
			<NavSection title='AUTOMATION'>
				<NavLink icon={RiInputMethodLine} href='/forms'>Forms</NavLink>
				<NavLink icon={RiGitMergeLine} href='/automations'>Automations</NavLink>
			</NavSection>
		</Stack>
	)
}
