const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//post model
//const Post = require('../../models.Post');
//const Profile
router.get('/test', (req, res) => res.json({msg: "posts works"}));


module.exports = router;