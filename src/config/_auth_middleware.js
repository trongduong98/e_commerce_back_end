import JWT from './_JWT.js';

let isAuth = async(req, res, next) => {
    var _token = req.headers.authorization;
    if(_token) {
        try {
            var authData = await JWT.checkToken(_token);
            req.auth = authData;
            next();
        } catch (error) {
            return  res.status(404).send({
                        result: {
                            status: 404,
                            message: error.message
                        }
                    });
        }
    } else {
        return res.send({data: "Can not find token"});
    }
}

export default {
    isAuth
}