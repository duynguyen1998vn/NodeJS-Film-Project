const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Film', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(r => console.log('Connect Success'));

const UserSchema = new mongoose.Schema({
    account:{type:String,unique:true},
    password:String,
    listFollow:[String],

})

let User = mongoose.model('User',UserSchema);

/*
let insertUser = new User({
        account: 'duy',
        password: 123,
        listFollow: [],
    }
)

insertUser.save((err, doc) => {console.log('Dang ky Tai Khoan Thanh Cong')});

*/
module.exports = User;