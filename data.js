import bcrypt from 'bcrypt'

const users = [
    {
        email: 'tadevosyanhayk07@gmail.com',
        password: bcrypt.hashSync("password1", 10)
    },
    {
        email: 'tadevosyanhayk0712@gmail.com',
        password: bcrypt.hashSync("password2", 10)
    },
    {
        email: 'tadevosyanhayk2007@gmail.com',
        password: bcrypt.hashSync("password3", 10)
    },
    {
        email: 'tadevosyanhayk12@gmail.com',
        password: bcrypt.hashSync("password4", 10)
    },
    {
        email: 'tadevosyanhayk1207@gmail.com',
        password: bcrypt.hashSync("password5", 10)
    }
]

export default users