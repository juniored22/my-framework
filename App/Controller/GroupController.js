/*!
 * Group Controller
 * Copyright(c) 2020-2020 Edgard Junior
 * MIT Licensed
 */

'use strict';
const Group = require('../Model/Group');

module.exports = {

  async createGroup(req, res){
    const {name} = req.body;
    const group = await Group.create({name});

    return res.json(group)
  },

  async findAllGroup(req, res){
    const groups = await Group.findAll()

    return res.json(groups)
  },

  async findGroup(req, res) {
    const {group_id} = req.params;
    const group = await Group.findByPk(group_id);

    if(!group){
      return res.status(400).json({error: 'Group not found'})
    }

    return res.json(group)
  },

  async updateGroup(req, res){
    const {group_id} = req.params;
    const {name} = req.body;
    const result = await Group.update({
      name: name
    }, {
      where: {
        id: {
          [Op.eq]: group_id
        }
      }
    });

    return res.json(result)
  }
}
