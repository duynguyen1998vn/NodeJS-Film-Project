let express = require('express');
let ImageRouter = express.Router();
let ListFilm = require('./filmdb');

ImageRouter.get('/',(req,res) => {
    ListFilm.find({},(err,arrFilm) =>{

        let resultImage = [];
        arrFilm.forEach(f => {
            resultImage.push(f.image);
        })

        res.send(resultImage);
    })
})

module.exports = ImageRouter;