import mongoose from 'mongoose';
import config from 'config'

async function connect (){
const dbUri=config.get<string>('dbUrl');
try {
    await mongoose.connect(dbUri);   
    console.log("connected")
    // logger.info("DB connected");
} catch (error) {
    console.log("error")
    // logger.error('could not connect to db');
}
}
export default connect;