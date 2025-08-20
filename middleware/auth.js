module.exports = (req, res, next) => {
    if (req.session.isAuthenticated) {
        next();
    } else {
        req.session.redirectTo = req.originalUrl; //kullanıcının logine yönlendirilmesinden önce gitmek istediği sayfayı kaydediyoruz.
        return res.redirect("/login");
    }
};
