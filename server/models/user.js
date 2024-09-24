import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
  //  https://mongoosejs.com/docs/guide.html#_id
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  age: { type: Number, required: true },
  hearing_level: { type: String, required: true },
  interpreter_group: { type: String, required: true },
  curriculum: { type: String, required: true },
  curr_time: { type: Date, required: true },
  institution: { type: String, required: true },
  picture_profile: { type: String, required: true },
  role: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.generateAccessJWT = function () {
  let payload = {
    id: this._id,
    email: this.email,
    admin: this.role === "admin",
    iss: process.env.JWT_ISSUER,
    iat: Math.floor(Date.now() / 1000),
  };
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "24hr",
  });
};

const User = mongoose.model("User", userSchema);

export default User;
