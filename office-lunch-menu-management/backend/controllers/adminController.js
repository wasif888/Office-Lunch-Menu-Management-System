const Employee = require('../models/Employee');
const Menu = require('../models/Menu');
const Choice = require('../models/Choice');

const getChoices = async (req, res) => {
  try {
    const choices = await Choice.find().populate('employee').populate('menu');
    res.json(choices);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const addMenu = async (req, res) => {
  const { date, items } = req.body;
  try {
    const menu = new Menu({ date, items });
    await menu.save();
    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getChoices,
  addMenu,
};
