const registrationController = (req, res) => {

  const { username, email, password, phone } = req.body;
  const errors = {};

  // =========== username length validation ===========

  if (!username) {
    errors.username = "username is required";
  } else {
    if (username.length < 3) {
      errors.username = "username must be upper 2 chars";
    }
    if (username.length > 50) {
      errors.username = "username too longer";
    }
  }

  // =========== email validation ===========

  if (!email) {
    errors.email = "email is required";
  } else {
    if (!email.includes("@")) {
      errors.email = "email is not valid";
    }
  }

  // =========== password validation ===========

  if (!password) {
    errors.password = "password is required";
  } else {
    if (password.length < 6) {
      errors.password = "password must be upper 5 chars";
    }
    if (password.length > 50) {
      errors.password = "password is too longer";
    }
  }

  // =========== phone validation ===========

  const phoneNoArr = phone.split("");
  const firstTwoOfPhone = phoneNoArr[0] + phoneNoArr[1];

  if (!phone) {
    errors.phone = "phone is required";
  } else {
    if (phone.length !== 11) {
      errors.phone = "phone must be 11 chars";
    }
    if (firstTwoOfPhone !== "01") {
      errors.phone = "phone no must be start with 01";
    }
    if (!Number(phone)) {
      errors.phone = "phone is must be number";
    }
  }

  // =========== responses ===========

  if (errors.username || errors.email || errors.password || errors.phone) {
    res.json({ error: errors });
  } else {
    errors.username = "";
    errors.email = "";
    errors.password = "";
    errors.phone = "";

    res.json({ message: "all fields are valid" });
  }
};

module.exports = registrationController;
