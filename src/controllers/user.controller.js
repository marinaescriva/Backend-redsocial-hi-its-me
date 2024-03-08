
import User from "../models/User.js";

export const getUsers = async (req, res) => {
   try {

      const findUsers = await User.find()

      res.status(201).json(
         {
            success: true,
            message: "Users retrieved succesfully",
            data: findUsers
         }
      )
   } catch (error) {
      res.status(500).json(
         {
            success: false,
            message: "ERROR",
            error: error.message
         }
      )
   }
}

export const getUserProfile = async (req, res) => {
   try {

      const profileEmail = req.tokenData.
      // const userId = req.tokenData.userId;
      // const findUserById = await User.findOne(
      //    {
      //       _id: userId
      //    }
      // )

      // if (!findUserById) {
      //    return res.status(500).json(
      //       {
      //          success: false,
      //          message: "User not found"
      //       }
      //    )
      // }

      // if (userId === req.params.User._id)

      //    console.log(userId, "1")
      // console.log(req.params._id, "2")

      res.status(201).json(
         {
            success: true,
            message: `User ${user.name} retrieved succesfully`,
            data: findUser
         }
      )
   } catch (error) {
      res.status(500).json(
         {
            success: false,
            message: "ERROR",
            error: error.message
         }
      )
   }
}

