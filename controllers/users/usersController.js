
import User from '../../models/Users/User.js';

export const register = async (req, res) => {
   try {
    const { username, email, password } = req.body;
    
    // Check if user already exists
    const user = await User.findOne({username: username});
    if(user){
        throw new Error("User Already Exists");
    }
    
    // Create new user
    const newUser = new User({username, email, password});
    await newUser.save();
    
    // Send success response
    res.json({
      status: "success",
      message: "User registered successfully",
      _id: newUser?._id,
      email: newUser?.email,
      role: newUser?.role
    });

   } catch (error) {
     res.status(400).json({
       status: "failed", 
       message: error.message
     });
   }
}