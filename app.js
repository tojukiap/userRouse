const express = require('express')
const app = express()
const port = 3000
const userRoute = require('./routes/userRoute')

app.use(express.json)

app.use('/api/user', userRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})