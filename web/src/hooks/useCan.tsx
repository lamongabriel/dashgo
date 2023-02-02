import { validateUserPermissions } from '../utils/validateUserPermissions'
import { useAuth } from './useAuth'

interface UseCanParams {
	roles?: string[]
	permissions?: string[]
}

export function useCan ({permissions = [], roles = []}: UseCanParams) {
	const { isAuth, user } = useAuth()

	if(!isAuth) {
		return false
	}

	return validateUserPermissions({user, permissions, roles})
}
