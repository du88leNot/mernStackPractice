const express = require('express');
const moongoose = require('mongoose');

const app = express();

// db api outing 
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

// db info
const db = require('./config/keys').mongoURI;

// db connect
moongoose
    .connect(db, {useNewUrlParser: true})
    .then(() =>  console.log('MongoDb Connected!'))
    .catch((err => console.log(err)));

app.get('/', (req, res) => res.send('hello world'));

// routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`));
