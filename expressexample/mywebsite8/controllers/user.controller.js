const User=require('../models/user.model')

exports.redirectLogin=(req,res,next)=>{
    if(!req.session.username){
        res.redirect('/users/login')
    }else{
        next()
    }
}

exports.redirectDashboard=(req,res,next)=>{
    if(req.session.username){
        res.redirect('/dashboard')
    }else{
        next()
    }
}

exports.loginchk=(req,res)=>{
    //username and password, upon submit are stored in the req.body (body-parser)
    const {username,password}=req.body;

    try{
        User.findOne({username:username, password:password},(err, user)=>{
            if(user===null){
                res.end('Login Invalid')
            }
            else if(user.username===username && user.password===password){
                req.session.username=username;
                res.render('dashboard',{page:'Dashboard',menuId:'dashboard',session:req.session})
                console.log("Creating session for: "+req.session.username);
            }else{
                console.log("Credentials are wrong");
                res.end('Login Invalid');
            }
        });
    }catch(err){
        res.send(err)
    }
}

exports.fetchloginform=( req,res,next)=>{
    res.render('login',{page:'Login',menuId:'login'})
}

exports.dashboard=(redirectLogin,req,res,next)=>{
    res.render('dashboard',{page:'Dashboard', menuId:'dashboard'})
}

exports.logout=(req,res,next)=>{
    req.session.destroy((err)=>{
        if(err){
            return console.log(err)
        }else{
            console.log('Destroying session');
        }
        res.redirect('/users/login')
    });
}