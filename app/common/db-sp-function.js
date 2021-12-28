const { sequelize, Sequelize } = require('../models/index');
const { QueryTypes } = require('sequelize');

String.prototype.replaceLast = function (search, replace) {
  return this.replace(
    new RegExp(search + '([^' + search + ']*)$'),
    replace + '$1'
  );
};

const saveData = async (spName, inputParam) => {
  let spKey = '';
  let spKeyValue = '{';

  if (inputParam !== null && typeof inputParam === 'object') {
    inputParam.forEach((value, key) => {
      spKey += `:${key.trim()}, `;
      spKeyValue += `"${key.trim()}": "${value.trim()}", `;
    });
  }

  spKey = spKey.replaceLast(',', '');
  spKeyValue = spKeyValue.replaceLast(',', '');
  spKeyValue += '}';

  const t = await sequelize.transaction();

  try {
    const replacementObj = JSON.parse(spKeyValue);
    let spOutput = await sequelize.query(`CALL ${spName} (${spKey})`, {
      replacements: { ...replacementObj },
      transaction: t,
    });
    await t.commit();
    return spOutput[0][0];
  } catch (error) {
    console.log(error.message);
    await t.rollback();
    return reject({
      message: 'Something went wrong',
      error: true,
      error_mesage: error.message,
    });
  }
};

const displayByQuery = async (columns, tableName, condition) => {
  tableName = tableName.trim();
  condition = condition.trim();

  if (condition) {
    condition = ' AND ' + condition;
  }

  try {
    const val = await sequelize.query(
      `select ${columns} from ${tableName} where 0=0 ${condition}`,
      { type: QueryTypes.SELECT }
    );

    if (val.length <= 0) {
      return null;
    } else if (val.length == 1) {
      return val[0];
    } else {
      return val;
    }
  } catch (error) {
    return reject({
      message: 'Something went wrong',
      error: true,
      error_mesage: error.message,
    });
  }
};

const countRows = async (tableName, columnName, columnValue) => {
  try {
    return new Promise(async (resolve, reject) => {
      const spOutput = await sequelize.query(
        `SELECT countRowsCondition (:tablename, :columnname, :columnvalue)`,
        {
          replacements: {
            tablename: tableName,
            columnname: columnName,
            columnvalue: columnValue,
          },
        }
      );

      if (spOutput) {
        return resolve(parseInt(spOutput[0][0].countrowscondition));
      } else {
        return reject({ message: 'Something went wrong' });
      }
    });
    //return spOutput;
  } catch (error) {
    return reject({
      message: 'Something went wrong',
      error: true,
      error_mesage: error.message,
    });
  }
};

module.exports = {
  saveData,
  displayByQuery,
  countRows,
};
