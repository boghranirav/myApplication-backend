const Sequelize = require("sequelize");
const SequelizeAuto = require("sequelize-auto");

const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    dialectOptions: {
      ssl: {      /* <----- Add SSL option */
        require: true,
        rejectUnauthorized: false 
      }
    }
    ,
    logging: false,
  }
);
const test = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

test();

global.db = {};

// const auto = new SequelizeAuto(process.env.DB,
//   process.env.USER,
//   process.env.PASSWORD, {
//     host: process.env.HOST,
//     dialect: "postgres",
//     directory: './app/models', // where to write files
//     port: process.env.DBPORT,
//     caseModel: 'c', // convert snake_case column names to camelCase field names: user_id -> userId
//     caseFile: 'c', // file names created for each model use camelCase.js not snake_case.js
//     singularize: true, // convert plural table names to singular model names
//     additional: {
//         timestamps: false
//         // ...options added to each model
//     },dialectOptions: {
//       ssl: {      /* <----- Add SSL option */
//         require: true,
//         rejectUnauthorized: false 
//       }
//     }
//     //...
// })

// const options = {
//   directory: "./app/models",
//   //   caseFile: "l",
//   //   caseModel: "o",
//   //   caseProp: "c",
// };

// const auto = new SequelizeAuto(sequelize, null, null, options);
//auto.run();

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
