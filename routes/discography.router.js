const express = require('express');

const discographyController = require('../controllers/discography.controller');

const discographyRouter = express.Router();

discographyRouter.get('/', discographyController.getAlbums);
discographyRouter.get('/songs', discographyController.getSongs);

module.exports = discographyRouter;
