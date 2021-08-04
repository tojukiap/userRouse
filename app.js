const express = require('express')
const app = express()
const port = 3000
const userRoute = require('./routes/userRoute')
const db = require("./config/db");
const ngrok = require('ngrok');

db()


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/api/user', userRoute);



(async function() {
  const url = await ngrok.connect(3000);
  console.log(url);
})();


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
});