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


export const aboutMe = {
    username: "hayk",
    imgURL: 'https://images.pexels.com/photos/2442888/pexels-photo-2442888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "Hello, I'm Hayk, a passionate learner and aspiring developer currently focused on honing my skills in Node.js, MongoDB, Express.js, HTML, CSS, and JavaScript (ECMAScript). My journey into the world of web development is driven by a deep curiosity and a desire to create meaningful and innovative projects. My portfolio is a reflection of my dedication to continuous improvement and showcases the projects and experiences I've gained along the way. As I explore the vast landscape of web technologies, I'm excited to contribute to the ever-evolving field of software development. Feel free to explore my portfolio and join me on this exciting coding adventure!"
}
