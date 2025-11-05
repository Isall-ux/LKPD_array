import { uniqueId } from "../../core/utils/generateUniqueId.js"
import { readDb, writeDb } from "../../core/utils/jsonDb.js"

export class User {
  constructor({ name, email, password }) {
    this.id = uniqueId("user")
    this.name = name
    this.email = email
    this.password = password
  }

  // Optional static helper
  static saveToDb(newUser) {
    const db = readDb()
    db.users.push(newUser)
    writeDb(db)
    return newUser
  }
}
