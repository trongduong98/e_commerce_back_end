import express from 'express';
import * as dotenv from 'dotenv';
import _AuthMiddleware from './src/config/_auth_middleware.js';
import {
    productRouter,
    userRouter,
    accountRouter,
    imagesRouter,
    productGroupRouter
} from './src/routes/_index.js';

dotenv.config() //Must have
const app = express();
app.use(express.json({limit: '5000mb'})); // for parsing application/json
app.use(express.urlencoded({ extended: true, limit: '5000mb' })); // for parsing application/x-www-form-urlencoded

//Allow origin
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, x-requested-with, Accept, Access-token, Authorization");
    next(); // Important
})

//Router
app.use('/account', accountRouter);
app.use('/user', userRouter);

//Middleware token
app.use(_AuthMiddleware.isAuth);
app.use('/products', productRouter);
app.use('/product-group', productGroupRouter);
app.use('/images', imagesRouter);

const port = process.env.PORT ?? 3000;
app.get('/', (req, res) => {
   res.send('response from root router'); 
});
app.listen(port, async() =>{
    console.log(`listening on port: ${port}`);
});