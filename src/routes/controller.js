const autoBind = require('auto-bind')
const {validationResult} = require('express-validator')
const User= require('./../models/user')
const Credit=require('./../models/credit')
const License=require('./../models/license')
module.exports = class {
  constructor() {
    autoBind(this);
    this.User = User;
    this.Credit = Credit;
    this.License = License;
  }

validationBody(req ,res){
    const result = validationResult(req);
    if(!result.isEmpty()){
        const errors = result.array();
        const messages=[];
        errors.forEach(err=>messages.push(err.msg));
        res.status(400).json({
            message:"validation errors",
            data:messages
        })
        return false;
    }
    return true;
}
validate(req , res ,next){
    if(!this.validationBody(req ,res)){
        return;
    
    }
    next();
}

response({res, message, code=200,success=true, data={}}){
    res.status(code).json({
        message,
        data,
        success
    });
   
}


};
