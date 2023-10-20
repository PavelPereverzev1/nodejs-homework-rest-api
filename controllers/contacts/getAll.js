const Contact = require('../../models/contact');

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite = false } = req.query;
  const skip = (page - 1) * limit;
  console.log(favorite);
  if (favorite) {
    res.status(200).json(
      await Contact.find({ owner, favorite: true }, '-createdAt -updatedAt', {
        skip,
        limit,
      })
    );
  } else {
    res.status(200).json(
      await Contact.find({ owner }, '-createdAt -updatedAt', {
        skip,
        limit,
      })
    );
  }
};

module.exports = getAll;
