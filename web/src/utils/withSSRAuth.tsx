import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { parseCookies } from 'nookies'
import decode from 'jwt-decode'
import { validateUserPermissions } from './validateUserPermissions'

interface Options {
	permissions: string[]
	roles: string[]
}

export function withSSRAuth<T extends { [key: string]: any }>(fn: GetServerSideProps<T>, options?: Options) {
	return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<T>> => {
		const cookies = parseCookies(ctx)
		const token = cookies['dashgo@token']

		if(!token){
			return {
				redirect: {
					destination: '/',
					permanent: false
				}
			}
		}

		if(options) {
			const user = decode<{permissions: string[], roles: string[]}>(token)
			const {permissions, roles} = options

			const hasUserTheRightPermissions = validateUserPermissions({user, permissions, roles})

			if(!hasUserTheRightPermissions){
				return {
					redirect: {
						destination: '/dashboard',
						permanent: false
					}
				}
			}
		}


		return await fn(ctx)
	}
}
