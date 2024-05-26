const Employee = require('../models/Employee');
const Choice = require('../models/Choice');
const Menu = require('../models/Menu');

const makeChoice = async (req, res) => {
  const { employeeId, menuId, choice } = req.body;
  try {
    const newChoice = new Choice({
      employee: employeeId,
      menu: menuId,
      choice,
    });
    await newChoice.save();
    res.status(201).json(newChoice);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  makeChoice,
};
