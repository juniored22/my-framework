/*!
 * User Controller
 * Copyright(c) 2020-2020 Edgard Junior
 * MIT Licensed
 */

'use strict';
const User      = require('../Model/User');
const Sequelize = require('sequelize');
const debug     = require('debug')('http');
const Op        = Sequelize.Op;
const bcrypt    = require('bcryptjs');

module.exports  = async (obj) => {

    let users = {}

    if(!obj.password || obj.email)
        return false

    try {
        users = await User.findAll({
            limit: 1,
            where: {
                email:obj.email
            },
            order: [['created_at', 'DESC']]
        })
    } catch (err) {
        users.error = err
    }

    return    await bcrypt.compare(obj.password,users[0].password) 
            ? { token : await bcrypt.hash(obj.password, 10) }
            : { token: false }
};