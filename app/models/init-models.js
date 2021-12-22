var DataTypes = require("sequelize").DataTypes;
var _tblApplication = require("./tblApplication");
var _tblCategory = require("./tblCategory");
var _tblLoginSession = require("./tblLoginSession");
var _tblSessionInfo = require("./tblSessionInfo");
var _tblTransaction = require("./tblTransaction");
var _tblUser = require("./tblUser");

function initModels(sequelize) {
  var tblApplication = _tblApplication(sequelize, DataTypes);
  var tblCategory = _tblCategory(sequelize, DataTypes);
  var tblLoginSession = _tblLoginSession(sequelize, DataTypes);
  var tblSessionInfo = _tblSessionInfo(sequelize, DataTypes);
  var tblTransaction = _tblTransaction(sequelize, DataTypes);
  var tblUser = _tblUser(sequelize, DataTypes);


  return {
    tblApplication,
    tblCategory,
    tblLoginSession,
    tblSessionInfo,
    tblTransaction,
    tblUser,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
