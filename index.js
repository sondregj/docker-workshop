const express = require('express')

const PORT = 8080
const HOST = '0.0.0.0'

const app = express()

app.get('/', (req, res, next) => {
	res.se
})

app.get('/:name', (req, res, next) => {
	return res.send('Hello, ' + req.params.name + '!')
})

app.listen(PORT, HOST)

console.log('Server started on port 8080.')
