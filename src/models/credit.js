const {Model ,DataTypes, INTEGER, STRING, DATE} =require("sequelize");
const sequelize = require("../../startup/db");


class Credit  extends Model{};
Credit.init({
 
  credit_type: { type: DataTypes.INTEGER, required: true, index:true },
  product_type: { type: DataTypes.INTEGER, required: true },
  maximum_camera_count: { type: DataTypes.INTEGER, required: true },
  credit_count: { type: DataTypes.INTEGER, required: true },
  expire_date: { type: DataTypes.DATE, require:true}


},{
  sequelize , 
  modelName:"credit",
  timestamps:false
}
)
module.exports = Credit