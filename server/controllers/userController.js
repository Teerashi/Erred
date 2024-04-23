const { User } = require('../db/models/user');

// module.exports.createUser = async (req, res, next) => {
//   try {
//     const { body } = req;
//     const user = await User.create(body);

//     res.status(201).send({ data: user });
//   } catch (error) {
//     next(error);
//   }
// };

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;

    // створення 1 запису (INSERT INTO)
    const user = await User.create(body);

    // стрворення декількох записів одночасно
    /*
      const users = await User.bulkCreate([
        userData1,
        userData2,
      ]);
    */

    res.status(201).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.findUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;
    const user = await User.findOne({ _id: userId });

    res.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.findUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
      body,
    } = req;

    const user = await User.findByIdAndUpdate(userId, body, { new: true });

    res.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;
    
    const user = await User.findByIdAndDelete(userId);

    res.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};