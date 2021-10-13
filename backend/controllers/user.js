import User from "../model/users.js";
import jwt from "jsonwebtoken";

export let registerUser = async (req,res) => {
    try {
        let email = req.body.email;
        let username = req.body.username;
        let password = req.body.password;
        let cpassword = req.body.cpassword;
        console.log(req.body);

        if(cpassword === password){
            User.findOne({email: email}).then((user)=>{
                if(user){
                    return res.status(400).json({email:"email already exists!!"});
                }else{
                    const user = new User({
                        email: email,
                        username: username,
                    });
                    user.password = user.generateHash(password);
                    user.save();
                    console.log(user);
                    return res.status(200).json({msg: user});
                }
            });
            
        }
        
    } catch (error) {
        console.log(error);
        res.status(404).send('Error');        
    }
}

export let loginUser = async (req,res) => {
    try {
        let email = req.body.email;
        User.findOne({email: email}).then((result)=>{        
            if(result){
                if(!result.validPassword(req.body.password)) {
                    console.log('Incorrect password');
                    res.status(400).json({auth:false, msg: "Incorrect password"});
                  } else {
                      console.log(result);
                      const id = result._id;
                      const token = jwt.sign({id},"jwtSecret");
                      req.session.user = result;


                    return res.status(200).json({result: result, auth: true, token: token});
                  }
            }else{
                return res.status(400).json({auth:false,email:"email doesn't exists!!"});
            }

        }).catch((err)=>console.log(err));
        
    } catch (error) {
        console.log(error);
        res.status(404).json({auth: false});        
    }
}

