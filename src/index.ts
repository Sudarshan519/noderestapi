import  config from 'config';
import express from 'express'
import App from './app';
import PostController from './resources/post/post.controller';
import UserController from './resources/user/user.controller';
import  connect from './utils/connect';
 
const app=new App([new UserController(),new PostController()],Number(3000))
app.listen();

// const app=express();
// app.use(express.json());
// const port=config.get<number>('port'); 

// app.listen(port,async()=>{
//     const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;
//     console.log('App is running at localhost on port',port);
//     await connect();
// })

