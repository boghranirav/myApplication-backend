const expense = require('./expense-variable');
const basic = require('./basic-variable');

module.exports = {
  ...expense,
  ...basic
}