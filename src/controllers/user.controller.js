
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

      // const profileName = req.body.name
      // console.log(profileName)

      // if(!profileName){
      //    throw new Error ("Profile name is missing in the request body")
      // }

      // console.log(profileName)  // i deleted this because parameter name in model is not required so users are whatever.

      const userId = req.tokenData.userId

      const user = await User
      .findById(userId)

      if(!user){
         throw new Error ("Any user founded")
      }
   
      res.status(201).json(
         {
            success: true,
            message: `User ${User.name} retrieved succesfully`,
            data: user
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

export const  updateUserProfile = async (req, res) => {

}


