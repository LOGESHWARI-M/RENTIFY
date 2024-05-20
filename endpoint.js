const express = require('express');
const User = require('./schema/user');
const Post = require('./schema/post');

const router = express.Router();



// User API's

router.post('/users/register', async (req, res) => {
  const { first_name, last_name, email, mobile, type, password } = req.body;

  try {
    const user = new User({ first_name, last_name, email, mobile, type, password });
    await user.save();
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.post('/users/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email, password });
      if (!user) {
        return res.status(404).send({ message: 'Invalid email or password' });
      }
  
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });


// POST Property API's

router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find({});
    res.send(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.post('/posts/add', async (req, res) => {
  const { p_name, place, area, nor, nob, h_nearby, c_nearby, o_name, contact, posted_by } = req.body;

  try {
    const post = new Post({ p_name, place, area, nor, nob, h_nearby, c_nearby, o_name, contact, posted_by });
    await post.save();
    res.send(post);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.get('/posts/:posted_by', async (req, res) => {
  const { posted_by } = req.params;

  try {
    const posts = await Post.find({ posted_by });
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

router.put('/post/update/:id', async (req, res) => {
  const { id } = req.params;
  const { p_name, place, area, nor, nob, h_nearby, c_nearby, o_name, contact, posted_by } = req.body;

  try {
    const post = await Post.findByIdAndUpdate(id, { p_name, place, area, nor, nob, h_nearby, c_nearby, o_name, contact, posted_by }, { new: true });
    res.send(post);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findByIdAndDelete(id);
    res.send(post);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router ;