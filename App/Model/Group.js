/*!
 * Group Model
 * Copyright(c) 2020-2020 Edgard Junior
 * MIT Licensed
 */

"use strict"
const Sequelize = require('sequelize');
const Mongoose = require('mongoose');

class Group extends Sequelize.Model {
  static sequelizeInit(connection) {
    super.init(
      {
        name: Sequelize.DataTypes.STRING
      },
      { sequelize: connection, modelName: 'group' }
    );
  }

  static mongoInit(connection) {
    const Schema = connection.Schema;
    const Group = new Schema({
      name: String,
      create_at: {
        type: Date,
        default: Date.now
      },
      update_at: {
        type: Date,
        default: Date.now
      }
    });
    connection.model('Group', Group)
  }

  /**
 * Handler OverwriteModelErrror  create sequelize 
 * Create method create mongoose model
 * Defalt sequelize
 * @param {*} obj 
 */
  static create(obj) {
    if (process.env.NOSQL) {
      const group = Mongoose.models.Group
      return group.create(obj)
    }
    return super.create(obj)
  }

  static findAll(obj) {
    if (process.env.NOSQL) {
      const group = Mongoose.models.Group
      return group.find(obj)
    }

    return super.findAll(obj)
  }

  static findByPk(obj) {
    if (process.env.NOSQL) {
      const group = Mongoose.models.Group
      return group.findById(obj)
    }

    return super.findByPk(obj)
  }
}

module.exports = Group;
