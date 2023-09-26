const express = require('express');

const { httpGetMembers, httpGetMemberById } = require('../controllers/members.controller');

const membersRouter = express.Router();

membersRouter.use((req, res, next) => {
    console.log(`IP Address: ${req.ip}`);
    next();
});

membersRouter.get('/', httpGetMembers);
membersRouter.get('/:memberId', httpGetMemberById);

module.exports = membersRouter;
