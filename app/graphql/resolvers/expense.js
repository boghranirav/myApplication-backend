const { sequelize, Sequelize } = require("../../models/index");
const { QueryTypes } = require("sequelize");
const init_models = require("../../models/init-models");
const models = init_models(sequelize, Sequelize);
const dbFunction = require("../../common/db-function");
const validator = require("validator");

module.exports = {

  createNewCategory: async function ({ createCategory }, req) {
      const errors = [];
      if (validator.isEmpty(createCategory.categoryType.trim())) {
        errors.push({ message: "Category Type name empty!" });
      }
  
      if (validator.isEmpty(createCategory.category.trim())) {
        errors.push({ message: "Category name empty!" });
      }

      if (errors.length > 0) {
        const error = new Error("Invalid.");
        error.data = errors;
        error.code = 422;
        throw error;
      }

      // await dbFunction.create(models.tblCategory, {
      //   user_id: "1",
      //   category_type: createCategory.categoryType.trim(),
      //   category: createCategory.category.trim(),
      // });

      const spOutput= await sequelize.query('CALL AddUpdateCategory (:categoryId, :userId, :categoryType, :categoryValue, :spMode)', 
      {replacements: { categoryId:'0', userId: '1', categoryType: createCategory.categoryType.trim(), categoryValue:createCategory.category.trim(), spMode:'ADD' }})
      

      // const val = await sequelize.query(
      //   `select category_id as "categoryId", category_type as "categoryType", category from tbl_category where category_id=${spOutput[0][0].categoryid} `,
      //   { type: QueryTypes.SELECT }
      // );

      const val = await sequelize.query(
        `select category_id as "categoryId", category_type as "categoryType", category from tbl_category where category_id=${spOutput[0][0].categoryid} `,
        { type: QueryTypes.SELECT }
      );
      console.log(val[0]);
      return val[0];
    },

    updateCategory: async function ({ updateCategory }, req) {
      const errors = [];

      if (validator.isEmpty(updateCategory.categoryId.trim()) || updateCategory.categoryId.trim()=='0') {
        errors.push({ message: "Category Id empty!" });
      }

      if (validator.isEmpty(updateCategory.categoryType.trim())) {
        errors.push({ message: "Category Type name empty!" });
      }
  
      if (validator.isEmpty(updateCategory.category.trim())) {
        errors.push({ message: "Category name empty!" });
      }

      if (errors.length > 0) {
        const error = new Error("Invalid.");
        error.data = errors;
        error.code = 422;
        throw error;
      }

      const spOutput= await sequelize.query('CALL AddUpdateCategory (:categoryId, :userId, :categoryType, :categoryValue, :spMode)', 
      {replacements: { categoryId:updateCategory.categoryId.trim(), userId: '1', categoryType: updateCategory.categoryType.trim(), categoryValue:updateCategory.category.trim(), spMode:'UPDATE' }})
      
      console.log("spOutput",spOutput)

      // const val = await sequelize.query(
      //   `select category_id as "categoryId", category_type as "categoryType", category from tbl_category where category_id=${spOutput[0][0].categoryid} `,
      //   { type: QueryTypes.SELECT }
      // );

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