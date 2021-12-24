module.exports = {
    INTERNAL_SERVER_ERROR: { CODE: 500, MESSAGE: "Internal server error." },
    OK: { CODE: 200, STATUS: true, MESSAGE: "Ok." },
    CREATED: { CODE: 201, STATUS: true, MESSAGE: "Created." },
    ERROR_SAVE: { CODE: 202, STATUS: true, MESSAGE: "Failed to save." },
    UPDATED: { CODE: 201, STATUS: true, MESSAGE: "Updated." },
    DELETED: { CODE: 201, STATUS: true, MESSAGE: "Deleted." },
    UNAUTHORISED: { CODE: 401, STATUS: true, MESSAGE: "Unauthorised." },
    AUTH_FAIL: { CODE: 401, STATUS: true, MESSAGE: "Authontication failed." },
    TOKEN_EXPIRE: {
      CODE: 400,
      STATUS: true,
      MESSAGE: "Authentication failed! Token Expired. Please login again.",
    },
    INVALID_LOGIN: {
      CODE: 404,
      STATUS: true,
      MESSAGE: "Could not log you in, invalid credentials.",
    },
    IMPORT_CSV_ERROR: {
      CODE: 201,
      STATUS: true,
      MESSAGE: "CSV Not found.",
    },
    IMPORT_CSV_FAIL: {
      CODE: 201,
      STATUS: true,
      MESSAGE: "Fail to import data into database.",
    },
    NOT_FOUND: { CODE: 404, STATUS: true, MESSAGE: "Not Found." },
    EMPTY_DATA: { CODE: 404, STATUS: true, MESSAGE: "Empty data." },
    EXIST: { CODE: 404, STATUS: true, MESSAGE: "Already exist data." },
  };
  