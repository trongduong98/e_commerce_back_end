import db from '../config/connect_db.js';

class accountModel {
    constructor(account) {
        this.id = account.account_id
        this.name = account.account_name,
        this.email = account.account_email,
        this.password = account.account_password,
        this.confirmPassword = account.account_confirm_password,
        this.date = account.account_date_created
    }
}

accountModel.check_login = (data, result) => {
    db.query("SELECT account_email, account_password, account_role FROM accounts WHERE account_email = ? AND account_password = ?", [data.email, data.password], function(err, account){
        if(err) {
            result(null);
            return;
        }
        result(account[0]);
    })
}

export default accountModel;