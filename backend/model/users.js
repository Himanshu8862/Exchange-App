import mongoose from "mongoose";
//import passportLocalMongoose from "passport-local-mongoose";
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
    cart: Array,
    discountCoupon: Array,  //object {seller:name,discount:text}
    previousOrder: Array,
    itemsOnSale: Array,
    rating: Number,
    requests: Array, //with respect to buyers
    // lastseen_date: {
    //   type: new Date(),
    // }
    //lastseen_time: new Time(), 
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