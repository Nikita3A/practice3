'use strict';

const Joi = require('joi');

/**
 * @exports
 * @method isJson
 * @param {}
 * @summary checking if content-type is application/json
 */
module.exports.isJson = function () {
  return (req, res, next) => {
    if (req.headers['content-type'] !== 'application/json') {
      res.status(400).send('Server requires application/json ');
    } else {
      next();
    }
  };
};

/**
 * @exports
 * @method validateFind
 * @param {}
 * @summary checking if req data valid email for search
 * and checking if email is valid email
 * @returns {req, res, next}
 */
module.exports.validateFind = function () {
  return (req, res, next) => {
    const schema = Joi.object().keys({
      email: Joi.string().email().required()
    });
    const { error } = schema.validate(req.body);

    if (error) {
      console.log('Invalid email');
      res.status(422).json({
        status: 'error',
        message: 'Invalid request data'
      });
    } else {
      next();
    }
  };
};

/**
 * @exports
 * @method validateCreateUser
 * @param {}
 * @summary checking if req data valid for creating a user with field email and name
 * and checking if email is valid email
 * @returns {req, res, next}
 */
module.exports.validateCreateUser = function () {
  return (req, res, next) => {
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      name: Joi.string().required()
    });
    const { error } = schema.validate(req.body);

    if (error) {
      console.log('Invalid data in create user');
      res.status(422).json({
        status: 'error',
        message: 'Invalid request data to create user'
      });
    } else {
      next();
    }
  };
};

/**
 * @exports
 * @method validateDeleteUser
 * @param {}
 * @summary checking if req data valid for deleting user with such email
 * and checking if email is valid email
 * @returns {req, res, next}
 */
module.exports.validateDeleteUser = function () {
  return (req, res, next) => {
    const schema = Joi.object().keys({
      email: Joi.string().email().required()
    });
    const { error } = schema.validate(req.body);

    if (error) {
      console.log('Invalid data in delete user');
      res.status(422).json({
        status: 'error',
        message: 'Invalid request data to delete user'
      });
    } else {
      next();
    }
  };
};

/**
 * @exports
 * @method validateUpdateUser
 * @param {}
 * @summary checking if req data valid for updating user and cheking if email is valid email
 * @returns {req, res, next}
 */
module.exports.validateUpdateUser = function () {
  return (req, res, next) => {
    const schema = Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required()
    });
    const { error } = schema.validate(req.body);

    if (error) {
      console.log('Invalid data in update user');
      res.status(422).json({
        status: 'error',
        message: 'Invalid request data to update user'
      });
    } else {
      next();
    }
  };
};
