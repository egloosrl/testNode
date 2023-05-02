import bcrypt from "bcryptjs"
import usersCollection from "../db"
import Loyalty from "./Loyalty"

class User {
  constructor(data) {
    this.data = data
    this.errors = []
  }

  register() {
    // ...user data validation

    return new Promise((resolve, reject) => {
      if (!this.errors.length) {
        usersCollection
          .findOne({
            $or: [{ username: this.data.username }, { email: this.data.email }]
          })
          .then(user => {
            if (user) {
              if (user.username == this.data.username) this.errors.push("Username già in uso.")
              if (user.email == this.data.email) this.errors.push("Email già in uso.")
              return reject(this.errors)
            }

            const salt = bcrypt.genSaltSync(10)
            this.data.password = bcrypt.hashSync(this.data.password, salt)

            usersCollection
              .insertOne(this.data)
              .then(res => {
                this.data._id = res.insertedId

                // Start loyalty program (year 1)
                this.data.loyalty = new Loyalty(this.data)

                resolve(this.data)
              })
              .catch(reject)
          })
      } else {
        reject(this.errors)
      }
    })
  }
}

export default User
