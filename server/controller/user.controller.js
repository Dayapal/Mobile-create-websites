import User from "../model/user.model.js";
import bcrypt from 'bcryptjs'
import generateToken from "../utils/generateToken.js";



export const register = async(req,res) =>{
    try {
        const {name,email,password} = req.body;
        // taking input from the user
        if(!name || !email || !password){ // check all fields that user 
            return res.status(404).json({ // has entered or not
                success: false,
                message: "All fields are required"
            })
        }

        const existingUser = await User.findOne({email})
        // here we are checking that user entered mail is  already exists or not?

        if(existingUser){
            return res.status(400).json({ // if exits so return that user already exist or mail is  already exits
                success: false,
                message: "User already exist"
            })
        }

        const salt = await bcrypt.genSalt(12);
        const hashPassword = await bcrypt.hash(password,salt)

        const user = new User({
            name,
            email,
            password: hashPassword
        });
        await user.save();
        res.status(201).json({
            success: true,
            message: "User register successfully",
            data: {
               name: user.name,
               email:  user.email,
               password: user.password,
            }
        })
        
    } catch (error) {
        console.log("Failed to registerUser")
        res.status(400).json({
            success: false,
            message: "Failed to register user",
            error: error.message
        })
        
    }
}



export const login = async(req, res) =>{
    try {
        const {email , password} = req.body;

        if(!email || !password){
            return res.status(404).json({
                success : false,
                message : "All fields are required"
            })
        }

        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({
                success: false,
                message : "User not Found"
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                success: false,
                message : "Email and password is wrong"
            })
        }
        const token = generateToken(user._id)
        res.status(200).json({
            success: true,
            message : "User login successfully",
            token,
            data: {
                id: user._id,
                name: user.name,
                email: user.email

            }
        })
    } catch (error) {
        console.log("Failed to login user", error.message);
        res.status(400).json({
            success : false,
            message: "Failed to login user",
            error: error.message
        })
        
    }
} 




// what is response and what is the request?

// backend sent response to browser client
// request client 