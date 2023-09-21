const express = require('express');

const memberController = require('../controllers/members.controller');

const membersRouter = express.Router();

membersRouter.use((req, res, next) => {
    console.log(`IP Address: ${req.ip}`);
    next();
});

membersRouter.get('/', memberController.getMembers);
membersRouter.get('/:memberId', memberController.getMemberById);

module.exports = membersRouter;
