import { createServer, Factory, Model } from 'miragejs'
import { User } from '../../types/user'
import { faker } from '@faker-js/faker'

export function mirageServer () {
	const server = createServer({

		models: {
			user: Model.extend<Partial<User>>({})
		},

		factories: {
			user: Factory.extend({
				name() {
					return faker.name.fullName()
				},
				email() {
					return faker.internet.email().toLowerCase()
				},
				createdAt() {
					return faker.date.recent(10)
				}
			})
		},

		seeds(server) {
			server.createList('user', 200)
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
