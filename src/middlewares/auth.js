import jwt from "jsonwebtoken"

export const auth = async (req, res, next) => {

    const token = req.headers.authorization?.split(" ")[1]
    try {

        if(!token){
            return res.status(401).json({
                success: false,
                message: "Token not found / Unauthorized"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.tokenData = decoded

        next()
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Token can't be validated or not found",
            error: error.message
        })
    }
}