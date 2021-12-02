'use strict';

const { Router } = require('express');
const controller = require('../components/user/controller.js');
const middleware = require('./middleware.js');
const router = Router();

router.get('/v1/user', middleware.validateFind(), controller.findUserByEmail);
router.post('/v1/user', middleware.validateCreateUser(), controller.createUser);
router.delete(
  '/v1/user',
  middleware.validateDeleteUser(),
  controller.deleteUser
);
router.patch(
  '/v1/user',
  middleware.validateUpdateUser(),
  controller.updateUser
);

module.exports = router;
