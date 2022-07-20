const express = require('express')  //express 모듈 가져옴
const app = express()   //exrpess 앱 생성
const port = 5000       //포트 번호

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://gaga:kgy542311@gayoung.b6bmx.mongodb.net/?retryWrites=true&w=majority',{
   // useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected .. '))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})