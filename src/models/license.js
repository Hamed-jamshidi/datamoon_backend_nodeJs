
const {Model ,DataTypes} =require("sequelize");
const { syslog } = require("winston/lib/winston/config");
const sequelize = require("../../startup/db");


class License  extends Model{};
License.init({
  
  credit_type: { type: DataTypes.INTEGER, required: true ,index:true},
  product_type: { type: DataTypes.INTEGER, required: true },
  camera_count: { type: DataTypes.INTEGER, required: true },
  user_key: { type: DataTypes.STRING(2048), required: true },
  license_code: { type: DataTypes.STRING, require:true},
  expire_date: { type: DataTypes.DATE, require:true},
  description:{type:DataTypes.STRING },
  sys_id:{type:DataTypes.STRING(2048),require:true}
  
},{
  sequelize , 
  modelName:"license",
  timestamps:false,
}
)
module.exports = License



