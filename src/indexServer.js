const express = require('express');
const bodyParser = require('body-parser');

var cors = require('cors');

const app = express();

app.use(cors());

const port = 8080;

import mongoose from 'mongoose';

import PostModel from './models/post';
import PostController from './Controler/PostControler';
const Post = new PostController();

mongoose.connect('mongodb://localhost:8080/blogReact', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/posts', Post.create);

app.get('/posts', Post.index);

app.get('/posts/:id', Post.read);

app.delete('/posts/:id', Post.delete);

app.put('/posts/:id', Post.update);

app.listen(8080, () => {
  console.log('start');
});
