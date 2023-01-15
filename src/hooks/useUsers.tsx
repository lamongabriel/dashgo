import { User } from '../types/user'
import { useQuery } from 'react-query'
import { api } from '../services/api'

interface getUsersResponse {
	totalCount: number
	users: User[]
}

export async function getUsers (page: number): Promise<getUsersResponse> {
	const { data, headers } = await api.get('/users', {
		params: {
			page
		}
	})

	const totalCount = Number(headers['x-total-count'])

	const users = data.users.map((user: User) => (
		{
			...user,
			created_at: new Date(user.created_at).toLocaleDateString('en-US', {day: '2-digit', month: 'long', year: 'numeric'})
		}
	))

	return {
		users,
		totalCount
	}
}

export function useUsers (page: number) {
	return useQuery(['users', page], () => getUsers(page), {staleTime: 1000 * 60 * 10, /* 10 minutes */})
}
