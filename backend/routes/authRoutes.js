const express = require("express");
const router = express.Router();

const User = require("../models/User");
const bcrypt = require("bcrypt");


// REGISTER

router.post("/register", async(req,res)=>{

    try{

        const {
            name,
            email,
            password,
            role
        } = req.body;


        const existingUser = await User.findOne({email});


        if(existingUser){

            return res.status(400).json({
                message:"User already exists"
            });

        }


        const hashedPassword = await bcrypt.hash(
            password,
            10
        );


        const user = new User({

            name,
            email,
            password:hashedPassword,
            role

        });


        await user.save();


        res.json({

            message:"Registration Successful"

        });



    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});




// LOGIN

router.post("/login", async(req,res)=>{


    try{


        const {
            email,
            password
        }=req.body;



        const user = await User.findOne({
            email
        });



        if(!user){

            return res.status(400).json({

                message:"User not found"

            });

        }



        const match = await bcrypt.compare(
            password,
            user.password
        );



        if(!match){

            return res.status(400).json({

                message:"Invalid Password"

            });

        }



        res.json({

            message:"Login Successful",

            token:"sampletoken",

            name:user.name,

            role:user.role

        });



    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }


});





// FORGOT PASSWORD

router.post("/forgot-password", async(req,res)=>{


    try{


        const {email}=req.body;



        const user = await User.findOne({
            email
        });



        if(!user){

            return res.status(404).json({

                message:"Email not registered"

            });

        }



        res.json({

            message:
            "Email verified. You can reset your password."

        });



    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});





// RESET PASSWORD

router.put("/reset-password", async(req,res)=>{


    try{


        const {
            email,
            newPassword
        } = req.body;



        const user = await User.findOne({
            email
        });



        if(!user){

            return res.status(404).json({

                message:"User not found"

            });

        }



        const hashedPassword = await bcrypt.hash(
            newPassword,
            10
        );



        user.password = hashedPassword;


        await user.save();



        res.json({

            message:
            "Password updated successfully"

        });



    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});



module.exports = router;