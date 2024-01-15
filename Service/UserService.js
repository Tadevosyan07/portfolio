import User from "../Model/UserModel.js";
import genToken from "../utils/Token.js";
import bcrypt from 'bcrypt'

const userService = {

    login: async (email, password) => {

        const loginUser = await User.findOne({email:email})

        if (loginUser) {
           if (bcrypt.compareSync(password, loginUser.password)) {
            const token = genToken(loginUser)
            return { token: token, Message: "Login Successfuly" }
           }
        }
        return { Message:"Wrong Email Or Password" }
    }

}

export default userService