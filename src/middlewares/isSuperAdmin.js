

export const isSuperAdmin = (req, res, next) => {
    console.log(tokenData , "esto que es")
    try {
        console.log(req.tokenData.name)
        if(req.tokenData.name !== "super_admin") {
            return res.status(401).json(
                {
                    success: false,
                    message: "UNAUTHORIZED"
                }
            )
        }

        console.log(tokenData)
        next();
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json(
            {
                success: false,
                message: "you dont have permisions"
            }
        )
    }
}