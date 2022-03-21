import express  from "express";
import authRoutes from "./routes/auth-routes.js";
import profileRoutes from "./routes/profile-routes.js";
import passport from "passport";
import passportSetup from "./config/passport-setup.js";
import mongoose from "mongoose";
import { connectToMongoDBWithRetry } from "./config/db.config.js";
import cookieSession from "cookie-session";
import { session } from "./config/keys.js";


const app =express();

app.set("view engine", "ejs");

app.use(cookieSession({
    maxAge: 20000,
    keys:[session.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect()

// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);


app.get('/', (req,res)=>{
res.render('home',{user:req.user} );
});

function main(){
    connectToMongoDBWithRetry()
app.listen(3000,() =>{
    console.log(`listening to port 3000`);


})
}
main()