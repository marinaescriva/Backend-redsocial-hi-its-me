
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config.js";


export const register = async (req, res) => {  //no se tipa request ni response porq es javascript!


    try {

        const email = req.body.email
        const password = req.body.password


        if (password.length < 6 || password.length > 10) {
            return res.status(400).json({
                success: false,
                message: "Password must contain between 6 and 10 characters"
            })
        }


        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            return res.status(400).json(
                {
                    success: false,
                    message: "format email invalid"
                }
            )
        }

        const passwordEncrypted = bcrypt.hashSync(password, 5);

        const newUser = await User.create({
            email: email,
            password: passwordEncrypted
        });

        const newUserNoPassword = {
            email: newUser.email,
            role: newUser.role,
            _id: newUser._id,
            createdAt: newUser.createdAt,
            updatedAt: newUser.updatedAt
        };

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: newUserNoPassword
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User cant be registered",
            error: error
        })
    }
};

export const login = async (req, res) => {

    try {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "email and password are mandatories"
            })
        }

        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if (!validEmail.test(email)) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Email format is not valid",
                    error: error.message
                }
            )
        }

        const user = await User.findOne(
            {
                email: email

            }
        )


        if (!user) {
            res.status(400).json({
                success: false,
                message: "Email or password invalid"
            })
        }

        const isValidPassword = bcrypt.compareSync(password, user.password)

        if (!isValidPassword) {
            return res.status(400).json({
                success: false,
                message: "Email or password invalid",
                error: error.message
            })
        }

        const token = jwt.sign(
            {
                userId: user._id,
                roleName: user.role,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "96h"
            }
        )

        res.status(200).json({

            success: true,
            message: `User logged succesfully`,
            token: token,


        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "User cant be logged",
            error: error.message
        })
    }
}