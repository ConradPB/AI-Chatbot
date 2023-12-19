import { connect } from 'http2'
import app from './app.js'
import { connectToMongoDB } from './db/connection.js'

connectToMongoDB()
.then(() => {
    app.listen(7000, () => console.log('Server is up and connected to Database...'))

}).catch(err => console.log(err))
