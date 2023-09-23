const express = require('express');

const { getAlbums, getAlbumById } = require('../controllers/discography.controller');

const discographyRouter = express.Router();

discographyRouter.use((req, res, next) => {
    console.log(`IP Address: ${req.ip}`);
    next();
});

discographyRouter.get('/', getAlbums);
discographyRouter.get('/:albumId', getAlbumById);
// discographyRouter.get('/songs', discographyController.getSongs);

module.exports = discographyRouter;
