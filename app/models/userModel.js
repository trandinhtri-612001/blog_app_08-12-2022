const{Sequelize, DataType, Model} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model{};

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    userName:{
        type:DataType.STRING,
        allowNull:false
    },
    password:{
        type:DataType.STRING,
        allowNull:false
    }
})
