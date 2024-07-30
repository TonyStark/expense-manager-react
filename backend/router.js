import express from "express";
import { User, Expense, UserExpense } from "./configs/userSchema.js"; // Import the Expense model

const router = express.Router();

router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/users", async (req, res) => {
  const { email, password } = req.query;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  try {
    // const users = await User.find(); // Fetch all users from the database
    const user = await User.findOne({ userEmail: email, userPassword: password });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // return res.status(200).json({ user });
    return res.status(200).json({ message: "true", uuid: user._id });
    // res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/users/all", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    return res.status(200).json({ users });
    // res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/expenses", async (req, res) => {
  try {
    const expense = new Expense(req.body);
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get("/expenses/all", async (req, res) => {
  try {
    const expense = await Expense.find(); // Fetch all users from the database
    return res.status(200).json({ expense });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/expenses", async (req, res) => {
  const { uuid } = req.query;
  if (!uuid) {
    return res.status(400).json({ message: "User ID is required" });
  }
  try {
    // const users = await User.find(); // Fetch all users from the database
    const user = await Expense.find({ userId: uuid});
    if (!user) {
      return res.status(401).json({ message: "Invalid User ID" });
    }
    // return res.status(200).json({ user });
    return res.status(200).json({ user });
    // res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Create a user expense record
router.post("/user-expenses", async (req, res) => {
  try {
    const userExpense = new UserExpense(req.body);
    await userExpense.save();
    res.status(201).json(userExpense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
