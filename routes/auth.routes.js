const { Router } = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const router = Router();

router.post(
  "/register",
  [
    check("email", "Uncorrect email").isEmail(),
    check("password", "Uncorrect password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult({ req });

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Uncorrect datas",
        });
      }

      const { email, password } = req.body;

      const candidate = await User.findOne({ email: email });

      if (candidate) {
        return res.status(400).json({ message: "User exists yet" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email: email, password: hashedPassword });

      await user.save();

      res.status(201).json({ message: "User ready" });
    } catch (e) {
      res.status(500).json({ message: "Something wrong" });
    }
  }
);

router.post(
  "/login",
  [
    check("email", "Write correct email").normalizeEmail().isEmail(),
    check("password", "Write password").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult({ req });

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Uncorrect login datas",
        });
      }

			const { email, password } = req.body;

			const user = await User.findOne({ email });

			if (!user) {
				return res.status(404).json({ message: 'User does not exist' });
			}

			const isMatch = await bcrypt.compare(password, user.password);
			
			if (!isMatch) {
				return res.status(400).json({ message: 'Wrong password' });
			}

			const token = jwt.sign(
				{ userId: user.id },
				config.get("jwt.Secret"),
				{ ExpiresIn: "1h" }
			)

			res.json({ token, userId: user.id });

    } catch (e) {
      res.status(500).json({ message: "Something wrong" });
    }
  }
);

module.exports = router;
