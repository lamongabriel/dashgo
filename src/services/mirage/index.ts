import { createServer, Model } from 'miragejs'
import { User } from '../../types/user'


export function mirageServer () {
	const server = createServer({

		models: {
			user: Model.extend<Partial<User>>({})
		},

		routes() {
			this.namespace = 'api'
			this.timing = 750

			this.get('/users')
			this.post('/users')

			this.namespace = ''
			this.passthrough()
		}
	})

	return server
}
