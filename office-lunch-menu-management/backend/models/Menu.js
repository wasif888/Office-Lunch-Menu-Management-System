const mongoose = require('mongoose');

const menuSchema = mongoose.Schema(
  {
    date: { type: Date, required: true },
    items: [{ name: String }],
  },
  { timestamps: true }
);

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
