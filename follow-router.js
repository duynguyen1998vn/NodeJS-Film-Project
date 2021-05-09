let express = require('express');
let FollowRouter = express.Router();
let User = require('./userdb');
let ListFilm = require('./filmdb');
//Follow Movie
FollowRouter.post('/:idUser/:idFilm',(req,res) => {

    User.findById(req.params.idUser)
        .exec((err,u) => {

            let dataUpdate = u.listFollow;
            dataUpdate.push(req.params.idFilm);

           u.updateOne({listFollow:dataUpdate},(err,result) => {
               if(err) res.status(500);
           })
            res.status(200);
        })
})

//get list movie followed
FollowRouter.get('/:idUser',(req,res) => {
    User.findById(req.params.idUser)
        .exec((err,u) => {

            ListFilm.find({})
                    .exec((err,arrFilm) => {

                        let temp = arrFilm.filter((f) =>u.listFollow.includes(f._id));
                        let result = [];

                        temp.forEach(t => {
                            result.push({
                                id:t._id,
                                name:t.title,
                                category:t.category,
                                image:t.image,
                                status:t.status,
                            })
                        })
                        res.status(200);
                        res.send(result);
                    });
        })
})

FollowRouter.delete('/:idUser/:idFilm',(req,res) => {
    User.findById(req.params.idUser)
        .exec((err,u) => {

            let dataUpdate = u.listFollow;
            dataUpdate.remove(req.params.idFilm);
            u.updateOne({listFollow:dataUpdate},(err,result) => {
                if(err) res.send(err);
            })
            res.send('delete success');
        })
})

module.exports = FollowRouter;