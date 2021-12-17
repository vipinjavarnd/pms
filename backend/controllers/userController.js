const USERDATA = require("./../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//login/checking for user existance
exports.loginUser = async (req, res) => {
  //PASSING a string as Java Web Token..
  const JWT_KEY = "QweeweFGHJKrwrdsfdf@#$%";
  const { username, password } = req.body;
  const Username = await USERDATA.findOne({ username: username });
  console.log(Username);
  if (!Username || !Username.password) {
    return res.json({
      status: "error",
      err: "Invalid Username/Password",
    });
  }
  if (await bcrypt.compare(password, Username.password)) {
    const token = jwt.sign(
      { id: Username._id, username: Username.username },
      JWT_KEY
    );

    return res.json({
      status: "Successful",
      data: token,
    });
  }

  return res.json({
    status: "error",
    err: "Invalid Username/Password",
  });
};
//the following module is optional to test purpose
//to get all user detail in the database
exports.getAllUsers = async (req, res) => {
  const getData = await USERDATA.find();
  console.log(getData);
  if (!getData) {
    res.status(404).json({
      status: "failed",
      message: "No Records FoundS",
    });
  }

  res.status(200).json({
    status: "successful",
    results: getData.length,
    userData: getData,
  });
};
//creating registration
exports.createNewUsers = async (req, res) => {
  console.log(req.body, "/////////////////////////////////////////");
  try {
    const {
      name,
      email,
      phone,
      username,
      password: plainTextPassword,
    } = req.body;
    const password = await bcrypt.hash(plainTextPassword, 10);

    // Client side validations
    if (!name || typeof name !== "string") {
      return res.json({
        status: "error",
        error: "Invalid Name",
      });
    }
    if (!email || typeof email !== "string") {
      return res.json({
        status: "error",
        error: "Invalid Email",
      });
    }
    if (!phone || typeof phone == "number") {
      return res.json({
        status: "error",
        error: "Invalid Phone No",
      });
    }
    if (!username || typeof username !== "string") {
      return res.json({
        status: "error",
        error: "Invalid Username",
      });
    }
    if (!password || typeof password !== "string") {
      return res.json({
        status: "error",
        error: "Invalid Password",
      });
    }
    if (password < 5) {
      return res.json({
        status: "error",
        error: "Password Too Small",
      });
    }

    const createNewUser = await USERDATA.create({
      name: name,
      email: email,
      phone: phone,
      username: username,
      password: password,
    });
    console.log(createNewUser);
    res.status(201).json({
      status: "successful",
      message: "User Registered",
      userData: createNewUser,
    });
  } catch (err) {
    res.status(400).json({
      status: "Registration Unsuccessful",
      err: err.message,
    });
  }
};
