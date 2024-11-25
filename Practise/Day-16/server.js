require("dotenv").config();
const express = require("express");
const connectDB = require('./database/db.js')
const authRouter = require('./routes/userAuthRouter.js')
const homeRouter = require('./routes/home-routes.js');
const adminRouter = require('./routes/admin-routes.js');
const imageRoutes = require('./routes/imageRoutes.js');


const PORT = process.env.PORT || 3000;

connectDB();

const app = express();

// middlewares
app.use(express.json());

// routers
app.use('/api/auth', authRouter);
app.use('/api', homeRouter);
app.use('/api/admin', adminRouter);
app.use('/api/image', imageRoutes)

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})