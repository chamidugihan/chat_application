import bcrypt from "bcryptjs";

import User from "../models/user.model.js";
import generateTokenandsetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "password and confirm password do not match",
      });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({
        error: "user already exist",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://api.dicebear.com/7.x/avataaars/svg?seed=${fullName}&gender=male`;
    const girlProfilePic = `https://api.dicebear.com/7.x/avataaars/svg?seed=${fullName}&gender=female`;
    const newUser = new User({
      fullName,
      username,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if (newUser) {
      generateTokenandsetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({
        error: "Invalid user data",
      });
    }
  } catch (error) {
    console.log("Error in SIGNUP controller", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || "",
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({
        error: "Invalid username or password",
      });
    }
    generateTokenandsetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in LOGIN controller", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({
      message: "Logout successful",
    });
  } catch (error) {
    console.log("Error in LOGUT controller", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};
