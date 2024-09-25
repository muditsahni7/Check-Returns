const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  category: {
    type: String,
    ref: 'Category'
  },

  amount: {
    type: Number,
    required: true
  },

  currency: {
    type: String,
    required: true,
    default: 'INR'
  },

  date: {
    type: Date,
    default: Date.now
  },

  description: {
    type: String,
    required: false
  }
});

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;
