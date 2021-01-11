import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import connectDB from './config/db.js'
dotenv.config()
// connectDB()

const importData = async () => {
    try {
        await User.deleteMany()

        const createdUser =   await User.insertMany(users)
        const adminUser = createdUser[0]._id
        const sampleProducts = products.map(product => {
            return {...product,user:adminUser}
        })
        await Product.insertMany(sampleProducts)
        
        console.log('DATA IMPORTED'.green.inverse)
    
    } catch (error) {
        console.log(`${error}`.red.bold);
    }
}

const destroyData = async () => {
    try {
        await User.deleteMany()

        console.log('DATA DESTROYED'.red.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.bold);
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}