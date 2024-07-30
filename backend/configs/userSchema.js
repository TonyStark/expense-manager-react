import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
      unique: true,
    },
    userPassword: {
      type: String,
      required: true,
    },
    userNickName: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const expenseSchema = mongoose.Schema(
  {
    expenseName: {
      type: String,
    },
    expenseAmount: {
      type: Number,
      required: true,
    },
    expenseDate: {
      type: Date,
      required: true,
    },
    expenseNotes: {
      type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const userExpenseSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    expenseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Expense",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("User", userSchema);
const Expense = mongoose.model("Expense", expenseSchema);
const UserExpense = mongoose.model("UserExpense", userExpenseSchema);

// Export models
export { User, Expense, UserExpense };
