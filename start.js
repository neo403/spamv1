//Jaexploit
//     _                       _       _ _
//    | | __ _  _____  ___ __ | | ___ (_) |_
// _  | |/ _` |/ _ \ \/ / '_ \| |/ _ \| | __|
//| |_| | (_| |  __/>  <| |_) | | (_) | | |_
// \___/ \__,_|\___/_/\_\ .__/|_|\___/|_|\__|
//                      |_|
//────────────────────
//UDAH GA DI KASIH NO ENC MSH BELUM PARAH
//PARAH BET LUUU
//
const {
  WAConnection,
  MessageType
} = require("@adiwajshing/baileys");
const {
  banner,
  color
} = require("./lib/function");
const fs = require("fs");
const colors = require('colors')


require('./index.js')
nocache('./index.js', module => console.log(`${module} Auto Update © Herman Chanel`))

async function starts(herman = new WAConnection()){
  herman.logger.level = 'warn';
  herman.version = [2, 2146, 9]
  herman.browserDescription = [ 'Jaexploit', 'Safari', '3.0' ];
  console.log(banner.string);
  herman.on('qr', qr => {
     console.log(
       color("[","white"),
       color("∆","red"),
       color("]","white"),
       color("Scan Qr Di Atas Agar Bisa Connecting!","purple")
       );
  });
  
  fs.existsSync('./session.json') && herman.loadAuthInfo('./session.json');
  herman.on('connecting', () => {
  	console.log("[ HC ]", color("Menghubungkan....","cyan"));
  });
  
  herman.on('open', (key) => {
  	console.log("[ HC ]",color("connected","green"));
  	herman.sendMessage(herman.user.jid, "*Bot Sudah Siap Di Gunakan*", MessageType.text);
  });

  
  await herman.connect({timeoutMs: 30*1000});
  fs.writeFileSync('./session.json', JSON.stringify(herman.base64EncodedAuthInfo(), null, '\t'));
  
  require("./index.js")(herman);
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional>
 */
function nocache(module, cb = () => {}) {
  console.log("Module", `'${module}'`, "Sc Ni Masih Di Kembang kan Oleh Lord Jaexploit");
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
  });
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = ".") {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

starts();