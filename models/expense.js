const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema
const expenseSchema = mongoose.Schema({
    amount:{type: Number },
    category:{ type:String},
    description:{ type:String},
    paymentMethod:{ type:String}
});


const Expense = module.exports = mongoose.model('Expense', expenseSchema);

module.exports.addExpense = function (newExpense, callback) {
    newExpense.save(callback);
       
}