const express = require('express');

const { httpGetAlbums, httpGetAlbumById } = require('../controllers/albums.controller');

const albumsRouter = express.Router();

albumsRouter.use((req, res, next) => {
    console.log(`IP Address: ${req.ip}`);
    next();
});

albumsRouter.get('/', httpGetAlbums);
albumsRouter.get('/:albumId', httpGetAlbumById);
// albumsRouter.get('/songs', discographyController.getSongs);

module.exports = albumsRouter;
