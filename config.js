const mysql = require('mysql');
class crypto_config {
    constructor(name, connection, type){
        this.name = name;
        this.connection = connection;
        this.type = type;
    }
}

module.exports.wallets = [
    // new crypto_config('zcash', 'http://username:12341234@127.0.0.1:8089', 'btc'),
    // new crypto_config('ethereum', 'http://localhost:8545', 'eth')
];

module.exports.ripple_config = new crypto_config('ripple', 'wss://s2.ripple.com', 'xrp');

module.exports.db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'transactions_notification'
});
