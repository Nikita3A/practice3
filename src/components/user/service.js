'use strict';

const UsersModel = require('./model.js');

/**
 * @exports findUserByEmail
 * @method findUserByEmail
 * @param {query}
 * @summary get user by email
 * @returns Promise<UserModel[]>
 */
exports.findUserByEmail = async function (query) {
  try {
    let searchField = query.body;
    let user = await UsersModel.find(searchField);
    return user;
  } catch (error) {
    throw Error('Error while Paginating users');
  }
};

/**
 * @exports createUser
 * @method createUser
 * @param {query}
 * @summary create a user with fields email and name
 * @returns Promise<UserModel[]>
 */
exports.createUser = async function (query) {
  try {
    let user = query.body;
    const ress = await new UsersModel(user).save();
    return ress;
  } catch (error) {
    throw Error('Error while creating user');
  }
};

/**
 * @exports deleteUser
 * @method deleteUser
 * @param {query}
 * @summary delete user when we know email
 * @returns Promise<UserModel[]>
 */
exports.deleteUser = async function (query) {
  try {
    let requestData = query.body;
    let user = await UsersModel.deleteOne(requestData);
    return user;
  } catch (error) {
    throw Error('Error while Paginating users');
  }
};

/**
 * @exports updateUser
 * @method updateUser
 * @param {query}
 * @summary update a user's email when we know the name
 * @returns Promise<UserModel[]>
 */
exports.updateUser = async function (query) {
  try {
    let requestData = query.body;
    let user = await UsersModel.updateOne(
      { name: requestData.name },
      { $set: { email: requestData.email } }
    );
    return user;
  } catch (error) {
    throw Error('Error while Paginating users');
  }
};
