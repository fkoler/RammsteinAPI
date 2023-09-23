const model = require('../models/members.model');
const path = require('path');

function getMembers(req, res) {
    res.json(model);
};

function getMembersImages(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'images'));
};

function getMemberById(req, res) {
    const memberId = +req.params.memberId;
    const member = model[memberId];

    if (member) {
        res.status(200).json(member);
    } else {
        res.status(404).json({
            error: "Member does not exist"
        });
    }
};

module.exports = {
    getMembers,
    getMemberById,
    getMembersImages,
};
