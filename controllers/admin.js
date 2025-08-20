const Settings = require("../models/settings");
const Featured = require("../models/featured");
const Announcements = require("../models/announcements");
const Sections = require("../models/sections");
const Contacts = require("../models/contacts");


exports.getSettings = (req,res,next) =>{
    res.render("admin/settings",{
        title : "Admin Panel",
        path : "/settings",
        isAuthenticated : req.session.isAuthenticated
    })
};



exports.postSettings = (req, res, next) => {
const { site_title, site_description, footer_text, iban_title, iban, contact_phone, contact_wp } = req.body;
const logo_url = "/media/" + req.files["logo_file"][0].filename;
const img_url = "/media/" + req.files["img_url"][0].filename;
console.log(logo_url)
console.log(img_url)
  Settings.findOne()
    .then((setting) => {
      if (setting) {
        return Settings.update(
          {
            site_title,
            site_description,
            logo_url: logo_url,
            img_url : img_url,
            footer_text,
            iban_title,
            iban,
            contact_phone,
            contact_wp
          },
          { where: { id: setting.id } }
        );
      } else {
        return Settings.create({
          site_title,
          site_description,
          logo_url,
          img_url,
          footer_text,
          iban_title,
          iban,
          contact_phone,
          contact_wp
        });
      }
    })
    .then(() => {
      res.redirect("/admin/settings");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Bir hata oluştu.");
    });
};



exports.getFeatureds = (req,res,next) =>{

    res.render("admin/featureds",{
        title : "Admin Panel",
        path : "/featureds",
        isAuthenticated : req.session.isAuthenticated
        
    })
    
}

exports.postFeatureds = (req,res,next) =>{

const { title , text } = req.body;
const img_url = "/media/" + req.file.filename;

Featured.findOne()
    .then(featureds =>{
        if(featureds){
            return Featured.update({
                title,
                text,
                img_url,
                

            },{where : { id : featureds.id}})
        }

        else{
            return Featured.create({
                title,
                text,
                img_url,
                

            })

        }
    })
    .then(()=>{
        res.redirect("/admin/featureds");
    })
    .catch(err=>{
        console.log(err);
    })


};



exports.getAnnouncements = async(req,res,next) =>{
try{
const announcements = await Announcements.findOne();
res.render("admin/announcements",{
        title : "Admin Panel",
        path : "/announcements",
        announcements : announcements || {},
        isAuthenticated : req.session.isAuthenticated
    })
}
catch (err) {
    console.log(err);
    res.status(500).send("Bir hata oluştu.");
  }
   

};

exports.postAnnouncements = (req, res, next) => {
const rawText = typeof req.body.text !== 'undefined' ? String(req.body.text) : '';
 let status = 0;
  if (typeof req.body.status !== "undefined" && req.body.status !== null) {
    const s = String(req.body.status).trim().toLowerCase();
    if (s === "1" || s === "true" || s === "on") status = 1;
  }

  Announcements.findOne()
  .then(announcement => {
    if (announcement) {
      return Announcements.update({
        img1_url: req.files["img1_url"] ? "/media/" + req.files["img1_url"][0].filename : announcement.img1_url,
        img2_url: req.files["img2_url"] ? "/media/" + req.files["img2_url"][0].filename : announcement.img2_url,
        img3_url: req.files["img3_url"] ? "/media/" + req.files["img3_url"][0].filename : announcement.img3_url,
        img4_url: req.files["img4_url"] ? "/media/" + req.files["img4_url"][0].filename : announcement.img4_url,
        text: (rawText.trim().length > 0) ? rawText : announcement.text,        
        status
      }, { where: { id: announcement.id } });
    } else {
      return Announcements.create({
        img1_url: req.files["img1_url"] ? "/media/" + req.files["img1_url"][0].filename : null,
        img2_url: req.files["img2_url"] ? "/media/" + req.files["img2_url"][0].filename : null,
        img3_url: req.files["img3_url"] ? "/media/" + req.files["img3_url"][0].filename : null,
        img4_url: req.files["img4_url"] ? "/media/" + req.files["img4_url"][0].filename : null,
        text: (rawText.trim().length > 0) ? rawText : null,
        status
      });
    }
  })
  .then(() => { res.redirect("/admin/announcements"); })
  .catch(err => { console.log(err); res.status(500).send("Bir hata oluştu."); });
};



exports.getSections = (req,res,next) =>{

    res.render("admin/sections",{
        title : "Admin Panel",
        path : "/sections",
        isAuthenticated : req.session.isAuthenticated
    })

};

exports.postSections = (req,res,next) =>{
const hedefimiz_img_url = "/media/" + req.files["hedefimiz_img_url"][0].filename;
const gayemiz_img_url = "/media/" + req.files["gayemiz_img_url"][0].filename;
const { gayemiz_text , hedefimiz_text , charity_text} = req.body;

Sections.findOne()
    .then(sections =>{
        if(sections){
            return Sections.update({
                hedefimiz_img_url,
                gayemiz_img_url,
                hedefimiz_text,
                gayemiz_text,
                charity_text
            },{where : { id : sections.id }});
        }

        else{
            return Sections.create({
                hedefimiz_img_url,
                gayemiz_img_url,
                hedefimiz_text,
                gayemiz_text,
                charity_text
            });
        }
    })
    .then(() =>{
        res.redirect("/admin/sections");
    })
    .catch(err =>{
        console.log(err);
        res.status(500).send("Bir hata oluştu");
    })

};


exports.getMessages = async (req,res,next) =>{
try{
const contacts = await Contacts.findAll();
    res.render("admin/messages",{
        title : "Mesajlar",
        path : "/messages",
        contacts,
        isAuthenticated : req.session.isAuthenticated
    });
    }
catch(error){
    console.log(error);
    res.status(500).send("Bir hata oluştu");

}

};
    



exports.postMessages = (req,res,next) =>{

const action = req.body.action;

if(!action){
    return res.redirect("/admin/messages");
}

const [type,id] = action.split("_");

if(type == "read"){
    Contacts.findByPk(id)
        .then((message)=>{
            return message.update({ read : true })
        })
        .then(()=>{
            res.redirect("/admin/messages");
        })
        .catch(err =>{
            console.log(err);
            res.status(500).send("Bir hata oluştu.");
        });
}
else{  //type == delete

    Contacts.findByPk(id)
        .then(message =>{
            return message.destroy();
        })
        .then(()=>{
            res.redirect("/admin/messages");
        })
        .catch(err =>{
            console.log(err);
            res.status(500).send("Bir hata oluştu.");
        });

};


};

