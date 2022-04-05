const controller = require('./../controller');
const { Op } = require('@sequelize/core');
const _ = require('lodash');
const { count } = require('../../models/credit');
const sequelize =require('../../../startup/db')

module.exports = new (class extends controller {
  async dashboard(req, res) {
    res.send("user dashboard");
  }

  async me(req, res) {
  this.response({res,data:_.pick(req.user,["name" , "email"])})

}

async percentUserPerCrdit(req ,res){
  const result = await this.Credit.findAll({attributes:["credit_type" ,[sequelize.fn("SUM", sequelize.col("credit_type")), "sumCredit"],[sequelize.fn("COUNT", sequelize.col("credit_type")), "countCredit"]],  group:[ 'credit_type']});
  this.response({res ,message:"success", data:result})
}

  
})()
