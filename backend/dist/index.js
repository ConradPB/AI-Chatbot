import app from './app.js';
import { connectToMongoDB } from './db/connection.js';
const PORT = process.env.PORT || 300;
connectToMongoDB()
    .then(() => {
    app.listen(PORT, () => console.log(`Server is up and connected to Database on port: ${PORT}`));
})
    .catch(err => console.log(err));
//# sourceMappingURL=index.js.map