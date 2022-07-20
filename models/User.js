const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //입력값의 공백을 없애주는 역할
        unique: 1 //중복되지 않도록
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {  //유효성 관리
        type: String
    },
    tokenExp: { //토큰 유효 기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema)  //모델 생성

module.exports = { User }     //해당 model을 다른 곳에서도 쓸 수 있도록

