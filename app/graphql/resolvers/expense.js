const { sequelize, Sequelize } = require("../../models/index");
const { QueryTypes } = require("sequelize");
const init_models = require("../../models/init-models");
const models = init_models(sequelize, Sequelize);
const dbFunction = require("../../common/db-function");
const dbSpFunction = require("../../common/db-sp-function");
const validator = require("validator");
const RESPONSE_MSG = require("../../common/status-code/index");


module.exports = {

  createNewCategory: async function ({ createCategory }, req) {
      const errors = [];
      if (validator.isEmpty(createCategory.categoryType.trim())) {
        errors.push(RESPONSE_MSG.EXPENSE.EMPTY.CATEGORY_TYPE );
      }
  
      if (validator.isEmpty(createCategory.category.trim())) {
        errors.push(RESPONSE_MSG.EXPENSE.EMPTY.CATEGORY);
      }

      if (errors.length > 0) {
        const error = new Error(RESPONSE_MSG.EXPENSE.EMPTY.MESSAGE + errors);
        error.data = errors.message;
        error.code = RESPONSE_MSG.EXPENSE.EMPTY.CODE;
        throw error;
      }
      
      const category = new Map();
  
      category.set("categoryId","0");
      category.set("userId", '1');
      category.set("categoryType", createCategory.categoryType.trim());
      category.set("categoryValue",createCategory.category.trim());
      category.set("spMode",'ADD');

      const spOutput=await dbSpFunction.saveData("AddUpdateCategory",category)

      const val = await sequelize.query(
        `select category_id as "categoryId", category_type as "categoryType", category from tbl_category where category_id=${spOutput.categoryid} `,
        { type: QueryTypes.SELECT }
      );
      return val[0];
    },
    updateCategory: async function ({ updateCategory }, req) {
      const errors = [];

      if (validator.isEmpty(updateCategory.categoryId.trim()) || updateCategory.categoryId.trim()=='0') {
        errors.push(errors.push(RESPONSE_MSG.EXPENSE.EMPTY.CATEGORY_ID));
      }

      if (validator.isEmpty(updateCategory.categoryType.trim())) {
        errors.push(RESPONSE_MSG.EXPENSE.EMPTY.CATEGORY_TYPE );
      }
  
      if (validator.isEmpty(updateCategory.category.trim())) {
        errors.push(RESPONSE_MSG.EXPENSE.EMPTY.CATEGORY );
      }

      if (errors.length > 0) {
        const error = new Error(RESPONSE_MSG.EXPENSE.EMPTY.MESSAGE);
        error.data = errors;
        error.code = 422;
        throw error;
      }

      const category = new Map();
  
      category.set("categoryId",updateCategory.categoryId.trim());
      category.set("userId", '1');
      category.set("categoryType", updateCategory.categoryType.trim());
      category.set("categoryValue",updateCategory.category.trim());
      category.set("spMode",'UPDATE');
      
      await dbSpFunction.saveData("AddUpdateCategory",category)

      const val = await sequelize.query(
        `select category_id as "categoryId", category_type as "categoryType", category from tbl_category where category_id=${updateCategory.categoryId.trim()} `,
        { type: QueryTypes.SELECT }
      );
      return val[0];
    },
    deleteCategory: async function ({ categoryId }, req) {
      const errors = [];

      if (validator.isEmpty(categoryId.trim()) || categoryId.trim()=='0') {
        errors.push({ message: "Category Id empty!" });
      }

      if (errors.length > 0) {
        const error = new Error("Invalid.");
        error.data = errors;
        error.code = 422;
        throw error;
      }

       await sequelize.query('CALL DeleteFromTable (:tableName, :columnName, :columnValue)', 
      {replacements: { tableName:'tbl_category',columnName:'category_id', columnValue:categoryId.trim() }})
      
      const val = await sequelize.query(
        `select category_id as "categoryId", category_type as "categoryType", category from tbl_category where category_id=${categoryId.trim()} `,
        { type: QueryTypes.SELECT }
      );
      return val[0];
    },
    getCategorys: async function ({ categoryId }, req) {

      const val = await sequelize.query(
        `select category_id as "categoryId", category_type as "categoryType", category from tbl_category `,
        { type: QueryTypes.SELECT }
      );
      return val;
    },
  
  };  