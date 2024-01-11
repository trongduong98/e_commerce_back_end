import {
    accountModel
} from '../models/_index.js';
import JWT from '../config/_JWT.js';

const login = async(req, res) => {
    var account = req.body;
    accountModel.check_login(account, async(data) => {
        if(data && data != null) {
            const _token  = await JWT.makeToken(data);
            res.send({result: _token});
        } else {
            res.status(404).send({
                result: {
                    status: 404,
                    message: "login is fail"
                }
            });
        }
    });
}

export default {
    login
}