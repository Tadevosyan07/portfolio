import userService from "../Service/UserService.js";

const userController = {

    login: async (req ,res) => {
        try {
            const {email, password} = req.body
            const loginUser = await userService.login(email,password)
            res.cookie("token",loginUser.token, {
                httpOnly: true,
                sameSite: "strict"
            })
            res.status(200).json(loginUser)
        } catch (error) {
            console.error({
                ERROR:error,
                Line:"--------------------",
                Message: " Error Whit Login API REQUEST"
            });
            res.status(500).json({CriticalError: "Internal Server Error"})
        }
    }

}

export default userController