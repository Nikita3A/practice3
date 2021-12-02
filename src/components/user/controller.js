'use strict';

const usersService = require('./service.js');

/**
 * This function will accept the request and call  'usersService.findUserByEmail(req)'
 * after that the function will return data as a response.
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise}
 */
exports.findUserByEmail = async function (req, res, next) {
  try {
    const usersDocs = await usersService.findUserByEmail(req);
    if (!usersDocs) {
      console.log('There is no docs');
      res.status(404).json("It's no good");
    }
    res.json(usersDocs);
  } catch (error) {
    console.log("Can't find");
    next(error);
  }
};

/**
 * This function will accept the request and call  'usersService.createUser(req)'
 * after that the function will return data as a response.
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise}
 */
exports.createUser = async function (req, res, next) {
  try {
    const userInfo = await usersService.createUser(req);
    if (!userInfo) {
      console.log("Can't create user");
      res.status(404).json("Can't create");
    }
    res.json(userInfo);
  } catch (error) {
    console.log("Can't create");
    next(error);
  }
};

/**
 * This function will accept the request and call  'usersService.deleteUser(req)'
 * after that the function will return data as a response.
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise}
 */
exports.deleteUser = async function (req, res, next) {
  try {
    const userDoc = await usersService.deleteUser(req);
    if (!userDoc) {
      console.log('There is no doc');
      res.status(404).json("Can't delete");
    }
    res.json(userDoc);
  } catch (error) {
    console.log("Can't delete doc");
    next(error);
  }
};

/**
 * This function will accept the request and call  'usersService.updateUser(req)'
 * after that the function will return data as a response.
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise}
 */
exports.updateUser = async function (req, res, next) {
  try {
    const userDoc = await usersService.updateUser(req);
    if (!userDoc) {
      console.log('There is no docs to update');
      res.status(404).json("Can't update user");
    }
    res.json(userDoc);
  } catch (error) {
    console.log("Can't update");
    next(error);
  }
};
