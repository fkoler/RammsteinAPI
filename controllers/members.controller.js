const model = require('../models/members.model');
const path = require('path');

async function httpGetMembers(req, res) {

    const members = await model.getAllMembers();

    try {
        res.status(200).json(members);

    } catch (error) {
        console.error("An error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

async function httpGetMemberById(req, res) {

    const memberId = +req.params.memberId;
    const member = await model.getMemberById(memberId);

    try {

        if (member) {
            res.status(200).json(member);
        } else {
            res.status(404).json({
                error: "Member does not exist",
            });
        }

    } catch (error) {
        res.status(500).json({
            error: "Internal server error",
        });
    }
};

function httpGetMembersImages(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'images'));
};

module.exports = {
    httpGetMembers,
    httpGetMemberById,
    httpGetMembersImages,
};
