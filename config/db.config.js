import mongoose from 'mongoose';

export const connectToMongoDBWithRetry = () => {    
    mongoose.connect("mongodb://localhost:27017/passportjs",
        {
            useNewUrlParser:true, 
            useUnifiedTopology:true,
        }).then(()=> console.log(`${new Date().toISOString()} [info] Connected to DB `))
        .catch((e) => {
        console.log(e);
        setTimeout(connectToMongoDBWithRetry, 5000);
    });
};