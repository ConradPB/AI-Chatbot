import { connect, disconnect } from 'mongoose'

async function connectToMongoDB() {
    try {
        await connect(process.env.MONGO_URI)
    } catch (error) {
        console.log(error)
        throw new Error('Failed to connect to MongoDB')
    }

}

async function disconnectFromMongodb() {
    try {
        await disconnect()
    } catch (error) {
        console.log(error)
        throw new Error('Failed to disconnect from MongoDB')
    }

}

export { connectToMongoDB, disconnectFromMongodb }