import axios from 'axios'
import {parseCookies} from 'nookies'

const cookies = parseCookies()

export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL as string,
	headers: {
		Authorization: `Bearer ${cookies['dashgo@token']}`
	}
})
