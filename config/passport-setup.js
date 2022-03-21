import passport from "passport";
import {Strategy as GoogleStrategy} from "passport-google-oauth20";
import {google} from "./keys.js";
import {UserModel} from "../models/user-model.js";

 passport.serializeUser((user, done)=>{
    done(null, user.id);
});

 passport.deserializeUser((id, done)=>{
     UserModel.findById(id).then((user)=>{
         done(null,user)
     })
   
});



export default passport.use(new GoogleStrategy({
    callbackURL:'/auth/google/redirect',
    clientID:google.clientID,
    clientSecret:google.clientSecret

}, (accessToken, refreshToken,profile,done) =>{
    console.log("passport callback function fired");
    console.log(profile);

    UserModel.findOne({googleId:profile.id}).then((currentUser)=>{
        if(currentUser){
            console.log("user is: ", currentUser);
            done(null, currentUser)
        }
        else{
            new UserModel({
                userName: profile.displayName,
                googleId: profile.id,
                thumbnail: profile._json.picture
            }).save().then((newUser)=>{
                console.log('new user created'+ newUser);
                done(null, newUser);
            })
        }
    })


   
})
)

