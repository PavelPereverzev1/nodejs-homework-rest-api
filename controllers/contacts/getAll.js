const Contact = require('../../models/contact');

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  res.json(await Contact.find({ owner }));
};

module.exports = getAll;
