const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblChangeHistory', {
    change_history_id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    change_table_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    change_table_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    old_value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    new_value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    change_date_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    change_column_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_change_history',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tbl_change_history_pkey",
        unique: true,
        fields: [
          { name: "change_history_id" },
        ]
      },
    ]
  });
};
