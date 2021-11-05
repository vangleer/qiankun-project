const express = require('express')

const app = express()

app.get('/hello', (req, res) => {
  res.send('Hello Qiankun from port 7001')
})

app.listen(7001, () => console.log('http://localhost:7001'))