import {Sequelize} from "sequelize";

const db = new Sequelize('mern_db','root','Ja4nganlup4',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;