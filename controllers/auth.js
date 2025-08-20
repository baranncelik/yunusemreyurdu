const Administor = require("../models/administor");
const bcrypt = require("bcrypt");

exports.getLogin = (req,res,next) =>{
    res.render("auth/login",{
        title : "Login",
        path : "/login",
        isAuthenticated : req.session.isAuthenticated
    });
};



exports.postLogin = (req,res,next) =>{




const { name , password } = req.body;

Administor.findOne( { where : { name : name } } )
    .then(admin =>{
        if(!admin){
            return res.send("Böyle bir kullanıcı bulunmamaktadır.")
        }

        return bcrypt.compare(password,admin.password)
            .then(isSucces =>{
                if(isSucces){
                    req.session.user = req.user;
                    req.session.isAuthenticated = true;
                    return req.session.save(function (err) {
                                let url = req.session.redirectTo || "/admin/messages" ;
                                delete req.session.redirectTo;
                                console.log(err);
                                res.redirect(url);
                            })
                }
                 else{
                    return res.redirect("/login")
                };
            })
            .catch(err =>{
                console.log(err);
            })

    })

};


exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    if (err) {
      console.log(err);
      return res.redirect("/admin"); 
    }
    res.redirect("/login"); 
  });
};
