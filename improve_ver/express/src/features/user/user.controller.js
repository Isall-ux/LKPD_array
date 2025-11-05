// src/features/user/user.controller.js
import { User } from "./user.model.js"
import { readDb, writeDb } from "../../core/utils/jsonDb.js"

export const getAllUsers = (req, res) => {
  try {
    const db = readDb()
    res.status(200).json(db.users || [])
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const createUser = (req, res) => {
  try {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" })
    }

    const user = new User({ name, email, password })
    User.saveToDb(user)

    // ✅ This line ensures JSON response is returned
    return res.status(201).json({
      message: "User created successfully",
      user
    })
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}
