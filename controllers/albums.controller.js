const model = require('../models/albums.model');
const path = require('path');

async function httpGetAlbums(req, res) {
    try {
        const data = await model.getAllAlbums();
        res.json(data);
    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
        });
    }
}

async function httpGetAlbumById(req, res) {
    const albumId = +req.params.albumId;
    try {
        const album = await model.getAlbumById(albumId);

        if (album) {
            res.status(200).json(album);
        } else {
            res.status(404).json({
                error: "Album does not exist",
            });
        }
    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
        });
    }
}

function httpGetSongs(req, res) {
    res.json(model);
};

module.exports = {
    httpGetAlbums,
    httpGetAlbumById,
    httpGetSongs,
};
