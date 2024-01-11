import {
    userModel
} from '../models/_index.js';

const check_token = async(req, res) => {
    var _token = req.headers.authorization;
    userModel.check_token(_token, function(data){
        res.send({result: data});
    });
}

export default {
    check_token
}