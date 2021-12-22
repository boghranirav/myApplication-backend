const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblSessionInfo', {
    session_info_id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    login_session_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    api: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    response_status: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    response_message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_session_info',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tbl_session_info_pkey",
        unique: true,
        fields: [
          { name: "session_info_id" },
        ]
      },
    ]
  });
};
