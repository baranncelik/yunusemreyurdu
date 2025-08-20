const axios = require("axios");

const BOT_TOKEN = "8228065388:AAFUMfWcriNGsbvZ9zoYqjdQ4rJ8WS0ULak";
const CHAT_ID = "1175224238";

exports.sendTelegramMessage = async(text) =>{
    try{
        await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,{
            chat_id : CHAT_ID,
            text : text,
            parse_mode : "HTML"
        });
    }
    catch(err){
        console.error("Telegram mesaj gönderilemedi:", err.message);
    }
}