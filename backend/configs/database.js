import mongoose from "mongoose"
import chalk from "chalk"
import * as emoji from 'node-emoji'

const connectDB=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        // console.log('Connected to MongoDB');
        console.log(chalk.bold(emoji.emojify(':rocket:') + ' Connected to MongoDB ' + emoji.emojify(':rocket:')));
    } catch(error) {
        // statements
        console.error(chalk.white.bold(emoji.emojify(':cry:') + ` ${error} ` + emoji.emojify(':cry:')));
    }
}

export default connectDB;