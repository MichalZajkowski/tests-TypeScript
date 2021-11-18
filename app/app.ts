import * as express from "express"

const app: express.Application = express()
const port = 3000
var assert = require('assert')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", async (req: express.Request, res: express.Response): Promise<express.Response> => {
	return res.status(200).send({
		message: "Hello World!",
	})
})

app.post('/', (req, res) => {
	try {
		var name = req.body.name
		var id = req.body.id
		assert(name === 'Mike')
		assert(id === '007')
		res.status(200).send({ message: 'OK' });
	} catch (error) {
		res.status(400).send
	}
})

try {
	app.listen(port, (): void => {
		console.log(`Connected successfully on port ${port}`)
	})
} catch (error) {
	console.error(`Error: ${error.message}`)
}