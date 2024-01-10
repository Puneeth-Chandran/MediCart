module.exports={
    userAuth:(req,res,next)=>{
        if (req.session.user)
            next()
        else{
            res.redirect("/login")
        }
    },

    adminAuth:(req,res,next)=>{
        if (req.session.admin){
            next()
        }else{
            res.redirect('/admin/login')
        }
    }

}