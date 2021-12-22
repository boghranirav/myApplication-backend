const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblLoginSession', {
    login_session_id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    log_status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ip_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    browser: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    login_os: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_login_session',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tbl_login_session_pkey",
        unique: true,
        fields: [
          { name: "login_session_id" },
        ]
      },
    ]
  });
};
