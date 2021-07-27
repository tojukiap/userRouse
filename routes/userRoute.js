const express = require('express')
const router = express.Router();

router.post('/signup', (req, res) => {
    res.send('Hello World!')
    console.log(req.body)
})

module.exports = router