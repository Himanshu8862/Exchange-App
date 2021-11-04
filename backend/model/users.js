import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
    username: String,
    password: {
        type: String,
    },
    email: String,
    locationUrl: String,
    phone: String,
    name: String,
    previousOrder: Array,
    rating: {
      type : Number,
      default : 0,
    },
    count : {
      type : Number,
      default : 0,
    }
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  
  // checking if password is valid
  userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

//userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema);
export default User;