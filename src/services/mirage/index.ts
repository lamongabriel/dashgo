import { createServer, Factory, Model, Response, ActiveModelSerializer } from 'miragejs'
import { User } from '../../types/user'
import { faker } from '@faker-js/faker'

export function mirageServer () {
	const server = createServer({

		serializers: {
			application: ActiveModelSerializer
		},

		models: {
			user: Model.extend<Partial<User>>({})
		},

		factories: {
			user: Factory.extend({
				id(i) {
					return i
				},
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
			server.createList('user', 198)
		},

		routes() {
			this.namespace = 'api'
			this.timing = 750

			this.get('/users', function (this, schema, request) {
				const {page = 1, per_page = 10} = request.queryParams

				const total = schema.all('user').length

				const pageStart = (Number(page) - 1) * Number(per_page)
				const pageEnd = pageStart + Number(per_page)

				const results = schema.all('user')
				const users = this.serialize(results).users.slice(pageStart, pageEnd)

				return new Response(
					200,
					{'x-total-count': String(total)},
					{users}
				)
			})

			this.get('/users/:id')
			this.post('/users')

			this.namespace = ''
			this.passthrough()
		}
	})

	return server
}
