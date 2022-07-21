const express = require('express')  //express 모듈 가져옴
const app = express()   //exrpess 앱 생성
const port = 5000       //포트 번호
const bodyParser = require('body-parser')
const { User } = require("./models/User");

const config = require('./config/key')

//application/x-wwwform-urlencoded 형태의 데이터를 분석해서 가져올 수 있도록 함 
app.use(bodyParser.urlencoded({     
    extended: true
}))

//application/json 형태의 데이터를 분석해서 가져올 수 있도록 함.
app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
   // useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected .. '))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res) => {

    //회원 가입할 때 필요한 정보들은 client에서 가져오면
    //그것들을 데이터 베이스에 넣어온다.


    const user = new User(req.body)       //객체 생성, body-parser를 이용해서 body로 client에게 보내는 정보를 받아준다.
   
    //위 명령어에서 받은 정보들이 user 모델에 저장됨
    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })     

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})