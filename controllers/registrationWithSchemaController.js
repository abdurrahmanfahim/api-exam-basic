const UserSchema = require("../models/UserSchema");

const registrationWithSchemaController = async (req, res) => {
  const { username, email, password, phone } = req.body;

  try {
    const user = new UserSchema({
      username,
      email,
      password,
      phone,
    });
    await user.save();
    res.json({ message: "registration successful" });
  } catch (error) {
    // Handle unique constraint errors
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      return res.status(400).json({
        error: `${field} already exists`,
      });
    }

    const errors = error.errors || {};
    res.json({
      message: {
        username: errors.username ? errors.username.message : null,
        email: errors.email ? errors.email.message : null,
        password: errors.password ? errors.password.message : null,
        phone: errors.phone ? errors.phone.message : null,
      },
    });
  }
};

module.exports = registrationWithSchemaController;
