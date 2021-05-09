let express = require('express');
let UserRouter = express.Router();
let User = require('./userdb');

//Login
UserRouter.get('/:account/:password',(req,res) => {
    User.find({account:req.params.account,password:req.params.password})
            .exec((err,user) => {
                if(user === null) res.send(null);
                else {
                    let u = user.pop();
                    res.send({
                        id:u._id,
                        account:u.account,
                    })
                }
            })
})

//Sign-Up
UserRouter.post('/:account/:password',(req,res) => {

    let user = new User({
        account:req.params.account,
        password:req.params.password,
        listFollow: [],
    })
    user.save((err,u) =>{
        if(err) res.send('0');
        res.status(200).send('1');
    });
})

module.exports = UserRouter;

