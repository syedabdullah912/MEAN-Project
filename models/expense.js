const mongoose = require('mongoose');

const Schema = mongoose.Schema;

 //const expense= mongoose.Schema({
   const expenseSchema = mongoose.Schema({
    
    amount:{type: Number,required:true },
    user: {type: Schema.ObjectId, ref: 'User' },
    category:{ type:String},
    description:{ type:String},
    paymentMethod:{ type:String}       
});
             
const Expense = module.exports = mongoose.model('Expense', expenseSchema);

module.exports.addExpense = function (newExpense, callback) {
    newExpense.save(callback);
       
}
