const express = require('express')

const app = express()

app.get('/hello', (req, res) => {
  res.send('Hello Qiankun from port 7002')
})

app.listen(7002, () => console.log('http://localhost:7002'))