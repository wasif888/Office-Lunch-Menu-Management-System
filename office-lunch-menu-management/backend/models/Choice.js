const mongoose = require('mongoose');

const choiceSchema = mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
      required: true,
    },
    menu: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true },
    choice: { type: String, required: true },
  },
  { timestamps: true }
);

const Choice = mongoose.model('Choice', choiceSchema);

module.exports = Choice;
