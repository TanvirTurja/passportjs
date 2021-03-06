import express from "express";
const router = express.Router();
import passport from "passport";

router.get('/login', (req, res)=>{
    res.render('login', { user: req.user });
});

router.get('/logout', (req,res)=>{
    req.logout();
    res.redirect('/');
});

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req,res)=> {
    res.redirect('/profile/')
    // res.send(req.user)
})

export default router;
