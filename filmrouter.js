let express = require('express');
let filmRouter = express.Router();

let ListFilm = require('./filmdb');

//Lay Danh Sach Film o trang home
filmRouter.get('/',(req,res) => {

    ListFilm.find({}, (err, films) => {

        let arrFilm  = [];
        films.forEach(f => {
            arrFilm.push(
                {
                    id: f._id,
                    name: f.title,
                    category: f.category,
                    image: f.image,
                    status: f.status,
                }
            )
        })
        res.send(arrFilm);
    });
});

//Lay Phim theo tap
filmRouter.get('/:id/:episode',(req,res) => {

    ListFilm.findById(req.params.id)
            .exec((err,film) => {
                res.send(film.episodeFilm.find(f => f.episode === Number(req.params.episode)));
            });
})

module.exports = filmRouter;