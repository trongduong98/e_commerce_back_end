import JWT from '../config/_JWT.js';

class userModel {
    constructor(user) {
        this.name = user.name,
        this.password = user.password
    }
}

userModel.check_token = async(token, result) => {
    try {
        const _token  = await JWT.checkToken(token);
        result(_token);
    } catch (error) {
        result({
            message: "jwt expired",
            status: 404,
            expiredAt: error.expiredAt,
            name: error.name
        });
    }
    
}

export default userModel;