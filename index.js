let express = require('express');
let app = express();
let cors = require('cors');

let filmRouter = require('./filmrouter');
let UserRouter = require('./userrouter');
let FollowRouter = require('./follow-router');
let ImageRouter = require('./image-router');

app.use(cors());

app.use('/api/v2/films',filmRouter);
app.use('/api/v2/users',UserRouter);
app.use('/api/v2/follows',FollowRouter);
app.use('/api/v2/images',ImageRouter);

app.listen(8080,() => {
    console.log('Server listening...');
})