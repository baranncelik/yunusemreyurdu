const Announcements = require("../models/announcements");
const Featured = require("../models/featured");
const Sections = require("../models/sections");
const Settings = require("../models/settings");
const Contacts = require("../models/contacts");
const {sendTelegramMessage} = require("../services/telegram");


exports.getIndex = async (req, res, next) => {
  try {
    const settings = await Settings.findOne();
    const featureds = await Featured.findOne();
    const announcements = await Announcements.findOne();
    const sections = await Sections.findOne();
    res.render("user/index", {
      title: "Ana Sayfa",
      path: "/",
      settings : settings || {},
      featureds : featureds || {},
      announcements : announcements || {},
      sections : sections || {}
      
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Bir hata oluştu.");
  }
};


exports.postIndex = (req, res, next) => {
  const { name, email, message } = req.body;

  Contacts.create({ name, email, message })
    .then(() => {
      const text = `
        📩 Yeni İletişim Mesajı

        👤 Ad: ${name}
        📧 Email: ${email}
        💬 Mesaj: ${message}
        `;

  sendTelegramMessage(text);

      res.redirect('/');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Bir hata oluştu.');
    });
};


exports.getVideo = (req,res,next) =>{
  res.render("user/video",{
    title : "Tanıtım Videosu",
    path : "/video"
  });
};


exports.postVideo = (req,res,next) =>{

};