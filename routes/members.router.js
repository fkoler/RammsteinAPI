const express = require('express');

const { getMembers, getMemberById } = require('../controllers/members.controller');

const membersRouter = express.Router();

membersRouter.use((req, res, next) => {
    console.log(`IP Address: ${req.ip}`);
    next();
});

membersRouter.get('/', getMembers);
membersRouter.get('/:memberId', getMemberById);

module.exports = membersRouter;
