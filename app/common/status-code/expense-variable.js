module.exports = {
    EXPENSE: {
      EMPTY: { CODE: 201, STATUS: true, MESSAGE: "Invalid Data for category.",CATEGORY_ID:{ MESSAGE: "Empty Category Id."}, CATEGORY:{ MESSAGE: "Empty Category."}, CATEGORY_TYPE:{ MESSAGE: "Empty Category type."} },
      CREATE: { CODE: 201, STATUS: true, MESSAGE: "Expense Added." },
      UPDATE: { CODE: 201, STATUS: true, MESSAGE: "Expense Updated." },
      DELETE: { CODE: 201, STATUS: true, MESSAGE: "Expense Deleted." },
      ERROR: { CODE: 202, STATUS: true, MESSAGE: "Expense- Not created." },
      ERROR_DEL: { CODE: 202, STATUS: true, MESSAGE: "Expense- Not Deleted." },
      ERROR_UPDATE: { CODE: 202, STATUS: true, MESSAGE: "Expense- Not Updated." },
      IMPORT_CSV: {
        CODE: 201,
        STATUS: true,
        MESSAGE: "CSV Imported for Expense.",
      },
      EXPORT_CSV: {
        CODE: 201,
        STATUS: true,
        MESSAGE: "CSV Exported for Expense.",
      },
    },
  };
  