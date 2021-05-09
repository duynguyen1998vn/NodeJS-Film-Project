const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Film', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(r => console.log('Connect Success'));

const FilmSchema = new mongoose.Schema({
    title: String,
    category: String,
    image: String,
    status: String,
    episodeFilm:[{
        episode: Number,
        src:String,
    }]
});

let ListFilm = mongoose.model('ListFilm',FilmSchema);
/*
let insertFilm= new ListFilm({
    title:'If It Is for My Daughter, I Had Even Defeat a Demon Lord',
    category:'Romance',
    image:'https://img.anime2you.de/2019/04/daughter1.jpg',
    status:'12/12',
    episodeFilm:[
        {episode:1,src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/pxozWTwUUsU?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
        {episode:2,src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/d5zIM5JmUP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
        {episode:3,src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/99q74cS0chk?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
        {episode:4,src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/99q74cS0chk?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
        {episode:5,src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/99q74cS0chk?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
        {episode:6,src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/99q74cS0chk?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
        {episode:7,src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/99q74cS0chk?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
        {episode:8,src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/99q74cS0chk?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
        {episode:9,src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/99q74cS0chk?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
        {episode:10,src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/99q74cS0chk?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
        {episode:11,src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/99q74cS0chk?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
        {episode:12,src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/99q74cS0chk?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
    ]
});

insertFilm.save( (err,f) => console.log('insert ok'));
*/


module.exports = ListFilm;