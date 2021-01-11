import bcrypt from 'bcryptjs'

const users = [
    {
        name:"Admin",
        email:"Admin@example.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:"Aatir",
        email:"aatirqureshi1@gmail.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    }
]

export default users