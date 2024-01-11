import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
dotenv.config() // must have

//make => generate token
let makeToken = (user) => {
    return new Promise((resolve, reject) => {
            jwt.sign({data: user}, process.env.ACCESS_TOKEN,{
                algorithm: "HS256",
                expiresIn: process.env.TOKEN_TIME_LIFE
            },
            (err, _token) => {
                if(err) {
                    return reject(err);
                } return resolve(_token);
            }
        );
    });
}

//check => xác thực mã đúng/sai/hết hạn
let checkToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, data) => {
            if(err){
                return reject(err);
            } 
            return resolve(data);
        });
    })
}

export default {
    makeToken: makeToken,
    checkToken: checkToken
}