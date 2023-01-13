import { User } from '../types/user'
import { useQuery } from 'react-query'
import { api } from '../services/api'

export async function getUsers (): Promise<User[]> {
	const { data } = await api.get('/users')

	const users = data.users.map((user: User) => (
		{
			...user,
			createdAt: new Date(user.createdAt).toLocaleDateString('en-US', {day: '2-digit', month: 'long', year: 'numeric'})
		}
	))

	return users
}

export function useUsers () {
	return useQuery('users', getUsers, {staleTime: 1000 * 5})
}
