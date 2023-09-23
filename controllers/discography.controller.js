const model = require('../models/discography.model');
const path = require('path');

function getAlbums(req, res) {
    res.json(model);
};

function getAlbumById(req, res) {
    const albumId = +req.params.albumId;
    const album = model[albumId];

    if (album) {
        res.status(200).json(album);
    } else {
        res.status(404).json({
            error: "Album does not exist"
        });
    }
};

function getSongs(req, res) {
    res.json(model);
};

module.exports = {
    getAlbums,
    getAlbumById,
    getSongs,
};
