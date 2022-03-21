import express from "express";
const router = express.Router();

const authCheck = (req,res,next)=>{
    if(!req.user){
        res.redirect('/auth/login');
    }
    else{
        next();
    }
}

router.get('/',authCheck, (req,res)=>{
    // res.send('you are logged in , this is ur profile- '+req.user.userName)
    res.render('profile', {user:req.user});
})

export default router;