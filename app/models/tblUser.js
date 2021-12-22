const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblUser', {
    user_id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    email_id: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    '2fa_status': {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    '2fa_string': {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    profile_picture: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_login_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_type: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_status: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    login_attempt: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tbl_user_pkey",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
