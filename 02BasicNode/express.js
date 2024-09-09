const express = require('express')
const app = express()

app.get('/profile', function (req, res) {
  res.send('Hello Boss I am running 🔥.......')
})

app.listen(3000);