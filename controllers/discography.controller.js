const model = require('../models/discography.model')

function getAlbums(req, res) {
    res.json(model);
};

function getSongs(req, res) {
    res.json(model);
};

module.exports = {
    getAlbums,
    getSongs,
};
