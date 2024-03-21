
import User from "../models/User.js";


export const getUsers = async (req, res) => {
   try {

      const findUsers = await User.find().select('-password')

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

      const userId = req.tokenData.userId

      const user = await User
         .findById(userId)
         .select('-password')

      if (!user) {
         throw new Error("Any user founded")
      }

      res.status(201).json(
         {
            success: true,
            message: "User retrieved succesfully",
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

export const updateUserProfile = async (req, res) => {

   try {

      const userId = req.tokenData.userId;
      const email = req.body.email;


      //validar datos
      const user = await User.findOne(
         {
            _id: userId
         },
      )

    

      if (!user) {
         return res.status(404).json({
            success: false,
            message: "user not found",
            error: error.message
         })
      }

      const userUpdated = await User.findOneAndUpdate(
         {
            _id: userId

         },
         {
            email: email
         },
         {
            new: true
         }
      ).select('-password');


      res.status(200).json({
         success: true,
         message: "user is updated",
         data: userUpdated
      })


   } catch (error) {
      res.status(500).json({
         success: false,
         message: "user cant be Updated",
         error: error.message
      })

   }
}

