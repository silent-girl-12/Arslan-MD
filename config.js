const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "rVNUEDTA#YxLd9Jc9gLEarMX-_rLbWQY0KPqH9HJiBxpkUjEcgpA",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/fcjrrk.jpg",
SUDO_NB: process.env.SUDO_NB || "923237045919",
MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: "true"
};
