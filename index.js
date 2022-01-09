//new bang
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
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers
} = require("@adiwajshing/baileys");
const { getBuffer, color, getGroupAdmins, createExif, getRandom, modStick, fetchJson } = require("./lib/function");
const { spawn, exec, execSync } = require("child_process");
const speed = require('performance-now');
const ig = require('insta-fetcher');
const hx = require("hxz-api");
const brainly = require('brainly-scraper');
const fs = require("fs");
const ffmpeg = require('fluent-ffmpeg');
const request = require('request');
const axios = require("axios");
const util = require('util')
const moment = require("moment-timezone");
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const imgbb = require('imgbb-uploader')
const user = JSON.parse(fs.readFileSync('./database/regi.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const { addCommands, checkCommands, deleteCommands } = require('./lib/commands1.js')
let commandsDB = JSON.parse(fs.readFileSync('./lib/commands.json'))
const { uploadimg, upload } = require('./lib/uploadimg')
//▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(Herman Chanel)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//
botname = "Jae Botz"
owner = ["6289505478069@s.whatsapp.net"];
name = "Jae"
premium = ["6289505478069@s.whatsapp.net"];
battery = {
  persen: "" || "tidak terdeteksi",
  charger: "" || false
};
blocked = [];
hrmn = '•'
roomttt = [];
apikey1 = 'KurrXd'
lolkey = '682aeab645ed61cf137cf971' 
defttt = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"];
antideleted = true;
self = false;
//▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(Herman Chanel)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//
// time
function tanggal(){
  myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
	myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
	var tgl = new Date();
	var day = tgl.getDate();
	bulan = tgl.getMonth();
	var thissDay = tgl.getDay(),
	thisDay = myDays[thissDay];
	var yy = tgl.getYear();
	var year = (yy < 1000) ? yy + 1900 : yy;
	return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`;
}

const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
const mentions = (teks, memberr, id) => {
	(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
}
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
if (time2 < "24:59:00") {
  var ucapanWaktu = "Selamat malam";
}
if (time2 < "19:00:00") {
  var ucapanWaktu = "Selamat senja";
}
if (time2 < "18:00:00") {
  var ucapanWaktu = "Selamat sore";
}
if (time2 < "15:00:00") {
  var ucapanWaktu = "Selamat siang";
}
if (time2 < "11:00:00") {
  var ucapanWaktu = "Selamat pagi";
}
if (time2 < "05:00:00") {
  var ucapanWaktu = "Selamat malam";
}

module.exports = (herman) => {
  herman.on("group-update", async(mem) => {
    metadata = await herman.groupMetadata(mem.jid);
    if (mem.announce == "false") {
      herman.sendMessage(metadata.id, `*[ Group Opened ]* \n\n${mns}group telah di buka oleh admin${mns}\n${mns}sekarang semua member bisa mengirim pesan${mns}`, MessageType.text);
      console.log(`[ GROUP OPENED ]\ngroup : ${metadata.subject}`);
    } else if (mem.announce == "true"){
      herman.sendMessage(metadata.id, `*[ Group Closed ]* \n\n${mns}group telah di tutup oleh admin${mns}\n${mns}sekarang hanya admin yang bisa mengirim pesan${mns}`, MessageType.text);
      console.log(`[ GROUP CLOSED ]\ngroup : ${metadata.subject}`);
    } else if (!mem.desc == "") {
      tag = mem.descOwner.split("@")[0] + "@s.whatsapp.net";
      herman.sendMessage(metadata.id, `*[ Group Description Change ]*\n\ndeskripsi group telah di ubah oleh owner ${mem.descOwner.split("@")[0]}\n\ndeskripsi baru: ${mem.desc}`, MessageType.text, {
        contextInfo:{mentionedJid:[tag]}
      });
      console.log(`[ DESCRIPTION CHANGE ]\ngroup : ${metadata.subject}`);
    } else if (mem.restrict == "false") {
      herman.sendMessage(metadata.id, `*[ Group Setting Change ]*\n\nfitur edit group telah di buka\nsekarang semua member dapat mengedit info group`, MessageType.text);
      console.log(`[ GROUP SETTING CHANGE ]\ngroup : ${metadata.subject}`);
    } else if (mem.restrict == "true") {
      herman.sendMessage(metadata.id, `*[ Group Setting Change ]*\n\nfitur edit group telah di tutup\nsekarang hanya admin yang dapat mengedit info group`, MessageType.text);
      console.log(`[ GROUP SETTING CHANGE ]\ngroup : ${metadata.subject}`);
    }
  });
  // Welcome Simple By Herman Chanel
  herman.on("group-participants-update", async (anu) => {
    try {
      groupMet = await herman.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await herman.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await herman.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(herman.user.jid)) {
        herman.sendMessage(anu.jid, "Halo!", "conversation");
      }
      if (anu.action == "add" && !mem.includes(herman.user.jid)) {
        mdata = await herman.groupMetadata(anu.jid);
        memeg = mdata.participants.length;
        num = anu.participants[0];
        let v = herman.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = v.vname || v.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        teks = `Halo ${anu_user} Welcome\nIntro Dulu\n• Nama:\n• Umur:\n• Status:\n• Askot:\nDi isi ya biar Kenal Wkwk`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://telegra.ph/file/ea0d60b2e24ce056ee1d7.jpg`
        );
        buttons = [
          { buttonId: `.herman`, buttonText: { displayText: "Selamat Datang" }, type: 1 },
        ];
        imageMsg = (
          await herman.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Somoga Betah",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await herman.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        herman.relayWAMessage(prep);
      }
      if (anu.action == "remove" && !mem.includes(herman.user.jid)) {
        mdata = await herman.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = herman.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        memeg = mdata.participants.length;
        out = `Sayonara ${anu_user}`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${
           groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://telegra.ph/file/ea0d60b2e24ce056ee1d7.jpg`
        );
        buttons = [
          { buttonId: `.herman`, buttonText: { displayText: "Good Bye" }, type: 1 },
        ];
        imageMsg = (
          await herman.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${out}`,
          footerText: "Jangan Balik Lagi Lu Anjim",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await herman.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        herman.relayWAMessage(prep);
      }
      } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });
  herman.on("CB:Blocklist", (json) => {
    if (blocked.length > 2) return;
    for (let i of json[1].blocklist){
      blocked.push(i.replace("c.us","s.whatsapp.net"));
    }
  });
  herman.on("CB:action,,battery", (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batteryLevel = parseInt(batteryLevelStr);
    battery.persen = `${batteryLevel}%`;
    battery.charger = json[2][0][1].live;
  });
  herman.on("message-delete",async(mek) => {
    if (mek.key.remoteJid == "status@broadcast") return;
    if (!mek.key.fromMe && mek.key.fromMe) return;
    if (antideleted === false) return;
    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
    let date = new Date();
    let region = 'id';
    let getTime = new Date(0).getTime() - new Date('1 Januari 2021').getTime();
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((newdate * 1) + getTime) / 84600000) % 5];
    let localweek = newdate.toLocaleDateString(region, {
      weekday: 'long'
    });
    let localday = newdate.toLocaleDateString(region, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const type = Object.keys(mek.message)[0];
    herman.sendMessage(mek.key.remoteJid, `*[ ANTI DELETE ]*\n\n*nama* : @${mek.participant.split("@")[0]}\n*jam* : ${moment.localweek.localday}\n*Type* : ${type}`, MessageType.text, {quoted:mek.message, contextInfo: { "mentionedJid": [mek.participant]}})
  });
  herman.on("CB:Call", (num) => {
    let nomer;
    calling = JSON.parse(JSON.stringify(num));
    nomer = calling[1].from;
    herman.sendMessage(nomer, `Sorry ${herman.user.name} can't receive calls, \ncall = block`, MessageType.text)
    .then(() => {
      return herman.blockUser(nomer, 'add')
    })
  });
  herman.on("chat-update", async(mek) => {
    try {
      if (!mek.hasNewMessage) return;
      mek = mek.messages.all()[0];
      if (!mek.message) return
      if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
      //if (mek.key.fromMe) return
      if (mek.key && mek.key.remoteJid == "status@broadcast") return;
      global.blocked;
      mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
      const content = JSON.stringify(mek.message);
      const from = mek.key.remoteJid;
      const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, buttonsMessage } = MessageType;
      const type = Object.keys(mek.message)[0];
      const cmd =
        type === "conversation" && mek.message.conversation
          ? mek.message.conversation
          : type == "imageMessage" && mek.message.imageMessage.caption
          ? mek.message.imageMessage.caption
          : type == "videoMessage" && mek.message.videoMessage.caption
          ? mek.message.videoMessage.caption
          : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
          ? mek.message.extendedTextMessage.text
          : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
          ? mek.message[type].selectedButtonId
          : "";
      const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'
      body = 
        type === 'listResponseMessage' && mek.message.listResponseMessage.title 
          ? mek.message.listResponseMessage.title 
          : type == 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId
          ? mek.message.buttonsResponseMessage.selectedButtonId
          : type == "conversation" && mek.message.conversation.startsWith(prefix)
          ? mek.message.conversation
          : type == "imageMessage" &&
            mek.message.imageMessage.caption.startsWith(prefix)
          ? mek.message.imageMessage.caption
          : type == "videoMessage" &&
            mek.message.videoMessage.caption.startsWith(prefix)
          ? mek.message.videoMessage.caption
          : type == "extendedTextMessage" &&
            mek.message.extendedTextMessage.text.startsWith(prefix)
          ? mek.message.extendedTextMessage.text
          : "";
      const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
      listbut = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
      const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
      const args = body.trim().split(/ +/).slice(1)
      const isCmd = body.startsWith(prefix)
      const q = args.join(' ')
      const botNumber = herman.user.jid
      const isGroup = from.endsWith("@g.us")
      const sender = mek.key.fromMe
        ? herman.user.jid
        : isGroup
        ? mek.participant
        : mek.key.remoteJid
      const totalchat = herman.chats.all()
      const groupMetadata = isGroup ? await herman.groupMetadata(from) : ''
      const isUser = user.includes(sender)
      const groupName = isGroup ? groupMetadata.subject : ''
      const groupId = isGroup ? groupMetadata.jid : ''
      const groupMembers = isGroup ? groupMetadata.participants : ''
      const groupDesc = isGroup ? groupMetadata.desc : ''
      const groupOwner = isGroup ? groupMetadata.owner : ''
      const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
      const isOwner = owner.includes(sender);
      const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
      const isGroupAdmins = groupAdmins.includes(sender) || false
      const conts = mek.key.fromMe ? herman.user.jid : herman.contacts[sender] || { notify: jid.replace(/@.+/, '') }
      const pushname = mek.key.fromMe ? herman.user.name : conts.notify || conts.vname || conts.name || '-'
      const more = String.fromCharCode(8206)
      const isAntiLink = isGroup ? antilink.includes(from) : false
      const readMore = more.repeat(4001)
      herman.updatePresence(from, Presence.recording)
      const isPrem = premium.includes(sender)
const sendButtonMsg = (text, footer, but = [], options = {}) => {
        const buttonMessagek = {
          contentText: text,
          footerText: footer,
          buttons: but,
          headerType: 1
        };
        herman.sendMessage(
          from,
          buttonMessagek,
          buttonsMessage,
          options
        )
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
return herman.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
      }
      const fvideo = {
	 key: { 
	      participant: '6283146208804@s.whatsapp.net'
	       },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`, 
                 'seconds': '62874', 
                 'caption': 'video',
                 'jpegThumbnail': fs.readFileSync('./lib/herman26.jpg')
                        }
                       }
	                  }
	const ftrol = {

key: {

fromMe: false,

participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})

},

message: { 

orderMessage: {

itemCount: 10.0000,

status: 9999, 

surface: 3674,

message: `${pushname}\n⎇ ${command}`,

orderTitle: 'Ntah', 

thumbnail: fs.readFileSync('./lib/herman26.jpg'),

sellerJid: '0@s.whatsapp.net'

}

}

}
			
    const daftar1 = `
╭─❒ 「 DAFTAR DULU YA 」 ❒
├ 🚀Hai ${pushname} ${ucapanWaktu} 
├ 🚀Sebelum Memakai Bot Verif Dulu Ya
└❏`
       const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak\nJika Button Tidak kelihatan Ketik .verify ya```'
       const daftar3 = [
          {
            buttonId: `.verify`,
            buttonText: {
              displayText: `🎧VERIFY🎧`,
            },
            type: 1,
          },]
	mess = {
				wait: '*Sabar.Permintaan Kamu Sedang Di Proses*',
				success: '*Donee*',
				error: {
					stick: '*Gagal .Terjadi Kesalahan Saat Mengkonversi Gambar Ke Stiker*',
					Iv: '*Link Tidak Valid!*'
				},
				only: {
					group: '*Perintah Ini Hanya Bisa Di Gunakan Di Dalam Grup Saja!*',
					benned: '*Maaf Nomor Kamu Sudah Di Baned Hubungi Owner Untuk Membuka',
					ownerG: '*Maaf Perintah Ini Hanya Bisa Di Gunakan Oleh Owner Grup!*',
					ownerB: '*Maaf Perintah Ini Hanya Bisa Di Gunakan Oleh Owner Bot* ',
					premium: '*Maaf Fitur Ini Khusus Untuk Member Premium!*',
					userB: `Halo Kaa *${pushname}*, Kamu Belum Terdaftar Silahkan Ketik \n*${prefix}daftar*`,
					admin: '*Maaf Perintah Ini Hanya Bisa Di Gunakan Oleh Admin Grup!*',
					Badmin: '*Jadikan Bot Sebagai Admin Untuk Bisa Melakukan Perintah Ini!*',
					publikG: `Maaf Bot Sekarang Sudah Di Private Oleh Owner\nUntuk Lebih Jelasnya Ktik \n*${prefix}infobot*`
				}
			}

		
      const sendStickerUrl = async(to, url) => {
console.log(color(time2, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('./lib/stick/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
herman.sendMessage(from, media, sticker, {quoted: mek})
console.log(color(time2, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))  
});
});
});
}
      if (self) {
        if (!isOwner || !botNumber) return
      }
      idttt = [];
      players1 = [];
      players2 = [];
      turn = [];
      for (let i of roomttt) {
        idttt.push(i.id)
        players1.push(i.player1)
        players2.push(i.player2)
        turn.push(i.turn)
      }
      const isTTT = isGroup ? idttt.includes(from) : false
	    const isPlayer1 = isGroup ? players1.includes(sender) : false
      const isPlayer2 = isGroup ? players2.includes(sender) : false
      const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
      }
      for (let i = 0; i < commandsDB.length ; i++) {
            if (budy == commandsDB[i].pesan) {
            herman.sendMessage(from, commandsDB[i].balasan, text, {quoted: mek})
            }
            }

      const reply = (teks) => {
        herman.sendMessage(from, teks, text, {quoted:mek})
        
        const sendMess = (hehe, teks) => {
				herman.sendMess(hehe, teks, text, {quoted:mek})
			}
      }
      const fakethumb = (teks, yes) => {
            herman.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./lib/image/fake.jpeg'),quoted:mek,caption:yes})
        }
        
      
      const sendMediaURL = async(url, text="", mids=[]) =>{
        if(mids.length > 0){
          text = normalizeMention(to, text, mids)
        }
        const fn = Date.now() / 10000;
        const filename = fn.toString()
        let mime = ""
        var download = function (uri, filename, callback) {
          request.head(uri, function (err, res, body) {
            mime = res.headers['content-type']
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        download(url, filename, async function () {
          console.log('done');
          let media = fs.readFileSync(filename)
          let type = mime.split("/")[0]+"Message"
          if(mime === "image/gif"){
            type = MessageType.video
            mime = Mimetype.gif
          }
          if(mime.split("/")[0] === "audio"){
            mime = Mimetype.mp4Audio
          }
          herman.sendMessage(from, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
          fs.unlinkSync(filename)
        });
      }
      
      const isMedia = type === "imageMessage" || type === "videoMessage";
      const isQuotedImage =
        type === "extendedTextMessage" && content.includes("imageMessage");
      const isQuotedVideo =
        type === "extendedTextMessage" && content.includes("videoMessage");
      const isQuotedAudio =
        type === "extendedTextMessage" && content.includes("audioMessage");
      const isQuotedSticker =
        type === "extendedTextMessage" && content.includes("stickerMessage");
      
      //▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(Herman Chanel)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//
      if (isCmd && !isGroup) console.log("[",color("command","lime"),"]",time2,color(command,"lime"),"from",color(sender.split("@")[0],"cyan"))
      if (isCmd && isGroup) console.log("[",color("command","lime"),"]",time2,color(command,"lime"),"from",color(sender.split("@")[0],"cyan"),"in",color(groupName,"yellow"))
      if (listbut) console.log("[",color("command","lime"),"]",time2,color(listbut,"lime"),"from",color(sender.split("@")[0],"cyan"))
      
   if (listbut == 'menu' || command == `${prefix}start`) {
        var menu = `${ucapanWaktu} kak ${pushname}
╭───────────────
│• *Info Bot*
│• 𝗡𝗮𝗺𝗲 : ${herman.user.name}
│• 𝗕𝗮𝘁𝗲𝗿𝗮𝗶 : ${battery.persen}
│• 𝗖𝗵𝗮𝗿𝗴𝗲𝗿 : ${battery.charger == true ? "sedang di cas" : "sedang tidak di cas"}
│• 𝙎𝙚𝙡𝙛 : ${self ? "mode self" : "mode public"}
│• 𝗣𝗵𝗼𝗻𝗲 : ${herman.user.phone.device_manufacturer}
│• 𝗦𝗲𝗿𝘃𝗲𝗿 : ${herman.browserDescription[1]}
│• 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : ${herman.browserDescription[2]}
│• 𝗠𝗼𝗱𝗲𝗹 : ${herman.user.phone.device_model}
│• 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 𝘄𝗮 : ${herman.user.phone.wa_version}
╰────────────────
         │ • *Info user*
         │ • 𝗡𝗮𝗺𝗲 : ${pushname}
         │ • 𝗢𝘄𝗻𝗲𝗿 : ${isOwner ? "Owner":"bukan Owner"}
         │ • 𝙉𝙤𝙢𝙤𝙧 : ${sender.split("@")[0]}
         ╰────────────────
${readMore}

*𖨠Info Menu*
 *${hrmn} ${prefix}totaluser*
 *${hrmn} ${prefix}report*
 
*𖨠Stiker*
 *${hrmn} ${prefix}sticker* _<reply image,video,sticker>_
 *${hrmn} ${prefix}ttp*
 *${hrmn} ${prefix}attp*
 *${hrmn} ${prefix}smeme*
 *${hrmn} ${prefix}toimg*

*𖨠Group Menu*
 *${hrmn} ${prefix}antilink*
 *${hrmn} ${prefix}daftar*
 *${hrmn} ${prefix}kicktime* _@_
 *${hrmn} ${prefix}hidetag*
 *${hrmn} ${prefix}tagall*
 *${hrmn} ${prefix}getpp*
 *${hrmn} ${prefix}getinfo*
 *${hrmn} ${prefix}kapankah*
 *${hrmn} ${prefix}bisakah*
 *${hrmn} ${prefix}apakah*
 *${hrmn} ${prefix}benarkah*
  *${hrmn} ${prefix}rate*
 
*𖨠Rondom Menu*
 *${hrmn} ${prefix}randombokep*
 *${hrmn} ${prefix}darkjokes*
 *${hrmn} ${prefix}tourl*
 *${hrmn} ${prefix}wangy*
 *${hrmn} ${prefix}suit*

*𖨠Owner*
 *${hrmn} ${prefix}mode*
 *${hrmn} ${prefix}join*
 *${hrmn} ${prefix}leave*
 *${hrmn} >*
 *${hrmn} =>*
 *${hrmn} $*
 *${hrmn} ${prefix}delete*
 *${hrmn} ${prefix}addrespon*
 *${hrmn} ${prefix}delrespon*
 *${hrmn} ${prefix}addprem*
 *${hrmn} ${prefix}delprem*
 
 *𖨠Text Prome*
 *${hrmn} ${prefix}blackpink*
 *${hrmn} ${prefix}neon*
 *${hrmn} ${prefix}greenneon*
 *${hrmn} ${prefix}advanceglow*
 *${hrmn} ${prefix}futureneon*
 *${hrmn} ${prefix}sandwriting*
 *${hrmn} ${prefix}sandsummer*
 *${hrmn} ${prefix}sandengraved*
 *${hrmn} ${prefix}metaldark*
 *${hrmn} ${prefix}neonlight*
 *${hrmn} ${prefix}holographic*
 *${hrmn} ${prefix}text1917*
 *${hrmn} ${prefix}minion*
 *${hrmn} ${prefix}deluxesilver*
 *${hrmn} ${prefix}newyearcard*
 *${hrmn} ${prefix}bloodfrosted*
 *${hrmn} ${prefix}halloween*
 *${hrmn} ${prefix}jokerlogo*
 *${hrmn} ${prefix}fireworksparkle*
 *${hrmn} ${prefix}natureleaves*
 *${hrmn} ${prefix}bokeh*
 *${hrmn} ${prefix}toxic*
 *${hrmn} ${prefix}strawberry*
 *${hrmn} ${prefix}box3d*
 *${hrmn} ${prefix}roadwarning*
 *${hrmn} ${prefix}breakwall*
 *${hrmn} ${prefix}icecold*
 *${hrmn} ${prefix}luxury*
 *${hrmn} ${prefix}cloud*
 *${hrmn} ${prefix}summersand*
 *${hrmn} ${prefix}horrorblood*
 *${hrmn} ${prefix}thunder*
 
 *𖨠Rondom Anime*
 *${hrmn} ${prefix}bj*
 *${hrmn} ${prefix}ero*
 *${hrmn} ${prefix}cum*
 *${hrmn} ${prefix}feet*
 *${hrmn} ${prefix}yuri*
 *${hrmn} ${prefix}trap*
 *${hrmn} ${prefix}lewd*
 *${hrmn} ${prefix}feed*
 *${hrmn} ${prefix}eron*
 *${hrmn} ${prefix}solo*
 *${hrmn} ${prefix}gasm*
 *${hrmn} ${prefix}poke*
 *${hrmn} ${prefix}anal*
 *${hrmn} ${prefix}holo*
 *${hrmn} ${prefix}tits*
 *${hrmn} ${prefix}kuni*
 *${hrmn} ${prefix}kiss*
 *${hrmn} ${prefix}erok*
 *${hrmn} ${prefix}smug*
 *${hrmn} ${prefix}baka*
 *${hrmn} ${prefix}solog*
 *${hrmn} ${prefix}feetg*
 *${hrmn} ${prefix}lewdk*
 *${hrmn} ${prefix}waifu*
 *${hrmn} ${prefix}pussy*
 *${hrmn} ${prefix}femdom*
 *${hrmn} ${prefix}cuddle*
 *${hrmn} ${prefix}eroyuri*
 *${hrmn} ${prefix}cum_jpg*
 *${hrmn} ${prefix}blowjob*
 *${hrmn} ${prefix}erofeet*
 *${hrmn} ${prefix}holoero*
 *${hrmn} ${prefix}classic*
 *${hrmn} ${prefix}erokemo*
 *${hrmn} ${prefix}fox_girl*
 *${hrmn} ${prefix}futanari*
 *${hrmn} ${prefix}lewdkemo*
 *${hrmn} ${prefix}wallpaper*
 *${hrmn} ${prefix}pussy_jpg*
 *${hrmn} ${prefix}kemonomimi*
 *${hrmn} ${prefix}nsfw_avatar*
 
*𖨠Photo 360*
 *${hrmn} ${prefix}wetglass*
 *${hrmn} ${prefix}multicolor3d*
 *${hrmn} ${prefix}watercolor*
 *${hrmn} ${prefix}luxurygold*
 *${hrmn} ${prefix}galaxywallpaper*
 *${hrmn} ${prefix}lighttext*
 *${hrmn} ${prefix}beautifulflower*
 *${hrmn} ${prefix}puppycute*
 *${hrmn} ${prefix}royaltext*
 *${hrmn} ${prefix}heartshaped*
 *${hrmn} ${prefix}birthdaycake*
 *${hrmn} ${prefix}galaxystyle*
 *${hrmn} ${prefix}hologram3d*
 *${hrmn} ${prefix}greenneon*
 *${hrmn} ${prefix}glossychrome*
 *${hrmn} ${prefix}greenbush*
 *${hrmn} ${prefix}metallogo*
 *${hrmn} ${prefix}noeltext*
 *${hrmn} ${prefix}glittergold*
 *${hrmn} ${prefix}textcake*
 *${hrmn} ${prefix}starsnight*
 *${hrmn} ${prefix}wooden3d*
 *${hrmn} ${prefix}textbyname*
 *${hrmn} ${prefix}writegalacy*
 *${hrmn} ${prefix}galaxybat*
 *${hrmn} ${prefix}snow3d*
 *${hrmn} ${prefix}birthdayday*
 *${hrmn} ${prefix}goldplaybutton*
 *${hrmn} ${prefix}silverplaybutton*
 *${hrmn} ${prefix}freefire*
 
 *𖨠Rondom Nsfw*
 *${hrmn} ${prefix}chiisaihentai*
 *${hrmn} ${prefix}trap*
 *${hrmn} ${prefix}blowjob*
 *${hrmn} ${prefix}yaoi*
 *${hrmn} ${prefix}ecchi*
 *${hrmn} ${prefix}ahegao*
 *${hrmn} ${prefix}hololewd*
 *${hrmn} ${prefix}sideoppai*
 *${hrmn} ${prefix}animefeets*
 *${hrmn} ${prefix}animebooty*
 *${hrmn} ${prefix}animethighss*
 *${hrmn} ${prefix}hentaiparadise*
 *${hrmn} ${prefix}animearmpits*
 *${hrmn} ${prefix}hentaifemdom*
 *${hrmn} ${prefix}lewdanimegirls*
 *${hrmn} ${prefix}biganimetiddies*
 *${hrmn} ${prefix}animebellybutton*
 *${hrmn} ${prefix}hentai4everyone*
 
 *𖨠Photo Oxy*
 *${hrmn} ${prefix}shadow*
 *${hrmn} ${prefix}cup*
 *${hrmn} ${prefix}cup1*
 *${hrmn} ${prefix}romance*
 *${hrmn} ${prefix}smoke*
 *${hrmn} ${prefix}burnpaper*
 *${hrmn} ${prefix}lovemessage*
 *${hrmn} ${prefix}undergrass*
 *${hrmn} ${prefix}love*
 *${hrmn} ${prefix}coffe*
 *${hrmn} ${prefix}woodheart*
 *${hrmn} ${prefix}woodenboard*
 *${hrmn} ${prefix}summer3d*
 *${hrmn} ${prefix}wolfmetal*
 *${hrmn} ${prefix}nature3d*
 *${hrmn} ${prefix}underwater*
 *${hrmn} ${prefix}golderrose*
 *${hrmn} ${prefix}summernature*
 *${hrmn} ${prefix}letterleaves*
 *${hrmn} ${prefix}glowingneon*
 *${hrmn} ${prefix}fallleaves*
 *${hrmn} ${prefix}flamming*
 *${hrmn} ${prefix}harrypotter*
 *${hrmn} ${prefix}carvedwood*
 
 *𖨠Dowloader*
  *${hrmn} ${prefix}play*
  *${hrmn} ${prefix}fb*
  *${hrmn} ${prefix}twitter*
  *${hrmn} ${prefix}mediafire*
  *${hrmn} ${prefix}ig*
  *${hrmn} ${prefix}ytmp3*
  *${hrmn} ${prefix}ytmp4*

*𖨠Wibu*
  *${hrmn} ${prefix}waifu*
  *${hrmn} ${prefix}loli*
  *${hrmn} ${prefix}neko*
  *${hrmn} ${prefix}husbu*
  *${hrmn} ${prefix}milf*
  *${hrmn} ${prefix}cosplay*
  *${hrmn} ${prefix}wallml*
  *${hrmn} ${prefix}kanna*
  *${hrmn} ${prefix}sagiri*
  *${hrmn} ${prefix}megumin*
  *${hrmn} ${prefix}wallnime*
`;
       const sendButtonsLoc = (from, title, text, desc, button, msg, men, file) => {
            return herman.SendButtonsLoc(from, {"text": '',"contentText": title + '\n' + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: fvideo, contextInfo: {"mentionedJid": men ? men : []}})
        }
        sendButtonMsg(menu, `runtime: ${runtime(process.uptime())}\nSubscribe Herman Chanel`,[{
          buttonId: `${prefix}yt`,
          buttonText: {
            displayText: "YOUTUBE ☘️"
          },
          type: 1
            },{
           buttonId: `${prefix}ig`,
            buttonText: {
              displayText: "Instagram 📱"
            },
            type: 1
            },{
            buttonId: `${prefix}owner`,
            buttonText: {
              displayText: "OWNER 🐥"
            },
            type: 1
        }])
      } else if (listbut == "donasi") {
        const donate = `
*❏ Donate Pages*
├ *dana* : 089505478069
`
        herman.sendMessage(from, fs.readFileSync("./lib/image/donasi.jpeg"), image, {quoted: fvideo, caption:donate})
              } else if (listbut == "github") {
        const donate = `
*❏ Donate Pages*
├ *Base By* : Herman Chanel
`
        herman.sendMessage(from, fs.readFileSync("./lib/image/fake.jpeg"), image, {quoted: fvideo, caption:donate})
      } else if (listbut == "sosial media") {
        const medsos = `
*❏ Sosial Media*
├ *github* : http://github.com/jaexploit
├ *Wa* : https://wa.me/6289505478069
`
        herman.sendMessage(from, fs.readFileSync("./lib/image/medsos.jpeg"), image, {quoted: fvideo, caption: medsos})
      }   
      switch(command){
      case 'mode':
          sendButtonMsg(`${ucapanWaktu} ${isOwner == true ? "owner\nsilahkan pilih mode di bawah ini" : "kak\nanda bukan owner\njadi percumah kalo kamu pencet"}`,`${tanggal()}`,[{
            buttonId:`${prefix}self on`,
            buttonText: {
              displayText: `on`
            },
            type: 1
          },{
            buttonId: `${prefix}self off`,
            buttonText: {
              displayText: 'off'
            },
            type: 1
          }])
          break;
          case 'daftar':
					herman.updatePresence(from, Presence.composing)
					if (isUser) return reply('*ᴋᴀᴍᴜ ꜱᴜᴅᴀʜ ᴛᴇʀᴅᴀғᴛᴀʀ!*')
					user.push(sender)
					fs.writeFileSync('./database/regi.json', JSON.stringify(user))
					try {
					ppimg = await herman.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					captionnya = `╭─「 *_ᴘᴇɴᴅᴀғᴛᴀʀᴀɴ_* 」\`\`\`\n│ ᴘᴇɴᴅᴀғᴛᴀʀᴀɴ ʙᴇʀʜᴀꜱɪʟ ꜱɴ: \n│TM08GK8PPHBSJDH10J\`\`\`\n│\n│\`\`\`ᴘᴀᴅᴀ ${Date} ${time2}\`\`\`\n│\`\`\`「 ɴᴀᴍᴀ 」: ${pushname}\`\`\`\n│\`\`\`「 ɴᴏᴍᴏʀ 」: wa.me/${sender.split("@")[0]}\`\`\`\n│\`\`\`ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ʙᴏᴛ\`\`\`\n│\`\`\`ꜱɪʟᴀʜᴋᴀɴ\`\`\`\n│\`\`\`ᴋɪʀɪᴍ ${prefix}menu\`\`\`\n│\`\`\`\n│ᴛᴏᴛᴀʟ ᴘᴇɴɢɢᴜɴᴀ: ${user.length} ᴏʀᴀɴɢ\`\`\`\n╰────────────────`
            
                    daftarimg = await getBuffer(ppimg)
					herman.sendMessage(from, daftarimg, image, {quoted: fvideo, caption: captionnya})
					break 
						case 'bc':
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await herman.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await herman.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							herman.sendMessage(_.jid, bc, image, {caption: `「 *_ʙʀᴏᴀᴅᴄᴀꜱᴛ_* 」\n\n${body.slice(4)}`})
						}
						herman.sendMessage(_.jid, bc, image, {caption: `「 *_ʙʀᴏᴀᴅᴄᴀꜱᴛ_* 」\n\n${body.slice(4)}`})
						reply('Suksess broadcast')
						} else {
						for (let _ of anu) {
							sendMessage(_.jid, `「 *_ʙʀᴏᴀᴅᴄᴀꜱᴛ_* 」\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
/////////(DOWNLOAD)///////////(Herman Chanel)//////////
case 'play':
if (args.length == 0) return await reply(`Masukin Judul Lagunya\nContoh : ${prefix + command} Aku Bukan Jodohnya`)
teks =
`Silahkan Pilih Tipe File Yg Mau Di Download`
but = [
{ buttonId: `lagu ${q}`, buttonText: { displayText: '🎵 MUSIC' }, type: 1 },
{ buttonId: `video ${q}`, buttonText: { displayText: '🎥 VIDEO' }, type: 1 }
]
return herman.SendButtonsLoc(from, teks, ftrol, but)
break
case 'lagu':
if (args.length < 1) return reply('Masukin Judul Lagunya')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
• *Judul :* ${res.all[0].title}
• *ID Video :* ${res.all[0].videoId}
• *Diupload Pada :* ${res.all[0].ago}
• *Views :* ${res.all[0].views}
• *Durasi :* ${res.all[0].timestamp}
• *Channel :* ${res.all[0].author.name}
• *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: zer, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
var tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
• *Judul :* ${res.all[0].title}
• *ID Video :* ${res.all[0].videoId}
• *Diupload Pada :* ${res.all[0].ago}
• *Views :* ${res.all[0].views}
• *Durasi :* ${res.all[0].timestamp}
• *Channel :* ${res.all[0].author.name}
• *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: zer, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: zer, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case "video":
if (args.length === 0)
return reply(`Masukin Judul Lagunya ?\nContoh: ${prefix + command} Aku Bukan Jodohnya`)
reply(mess.wait)
var srch = args.join("")
aramas = await yts(srch)
aramat = aramas.all;
var mulaikah = aramat[0].url;
try {
ytv(mulaikah).then((res) => {
var { dl_link, thumb, title, filesizeF, filesize } = res;
axios
.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000)
return sendMediaURL(from,thumb,`*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
var captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply("error"))
})
})
} catch (err) {
reply(mess.error.api)
}
break
case 'ytmp3':
if (args.length === 0) return reply(`Link Nya Mana ?\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply('Eror')
var srch = args.join(' ')
try {
yta(srch)
.then((res) => {
var { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
var captions = `🎧 *PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
await sendMediaURL(from, thumb, captions)
sendMediaURL(from, dl_link).catch(() => reply('error'))
}) 
})
} catch (err) {
reply('Terjadi kesalahan')
}
break
case 'ytmp4':
if (args.length == 0) return reply(`Link Nya Mana ?\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apikey1}&url=${ini_link}`)
get_result = get_result.result
ini_txt = `${get_result.title} - ${get_result.size}`
ini_buffer = await getBuffer(get_result.thumbnail)
await herman.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await herman.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe herman YT7'})
break             
//▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(Herman Chanel)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//
          case 'fb':
          case 'facebook':
              if (!q) return reply('Link Nya?')
              reply(mess.wait)
              data = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${setting.lolkey}&url=${args[0]}`)
              ini_video = await getBuffer(data.result)
              herman.sendMessage(from, ini_video, video, { quoted: mek })
              break
case 'mediafire':
              if (args.length < 1) return reply('Link Nya Mana? ')
              if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await mediafireDl(teks)
              result = `*MediaFire Downloader*
               
🍁 Nama : ${res[0].nama}
🍁 Ukuran : ${res[0].size}
🍁 Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
              reply(result)
              sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
              break
case 'twitter':
              if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
              if (!q) return reply('Linknya?')
              ten = args[0]
              var res = await twitterGetUrl(`${ten}`)
             .then(g => {
              ren = `${g.download[2].url}`
              sendMediaURL(from,ren,'Done')
})
              break
case 'ytdesc':
              if (args.length < 1) return reply('Video/Link Yt Nya Mana? ')
              teks = args.join(' ')
              res = await yts(teks)
              reply(res.all[0].description)
              break
case "tag":
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					herman.sendMessage(from, tagq, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
//▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(Herman Chanel)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//
			case 'tagme':
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					herman.sendMessage(from, tagu, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
						case 'totaluser':
					herman.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `╭────「 *TOTAL USER * 」\n`
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `[${no.toString()}] @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total Pengguna : ${user.length}\n╰──────⎿ *HERMAN BOTZ* ⏋────`
					herman.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
case 'sticktag':
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await herman.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./media/sticker/${wanu[1]}.webp`)
				herman.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
        case 'self':
          if (!isOwner) return reply("anda bukan owner yak:)")
          if (args[0] === "on") {
            self = true;
            reply("bot sekarang telah menjadi self mode")
          } else if (args[0] === "off") {
            self = false;
            reply("bot sekarang telah menjadi public mode")
          }
          break;
          case 'info':
					me = herman.user
					user.push(sender)
					uptime = process.uptime()
					teks = `➽ *ɴᴀᴍᴀ ʙᴏᴛ* : ${me.name}\n➽ *ᴏᴡɴᴇʀ ʙᴏᴛ* : Hermansyah\n➽ *ᴘʀᴇғɪx* : | ${prefix} |\n\n➽ *ᴀᴋᴛɪғ ꜱᴇᴊᴀᴋ* :${runtime(process.uptime)}\n➽ *ᴛᴏᴛᴀʟ ᴘᴇɴɢɢᴜɴᴀ* : ${user.length} ᴜꜱᴇʀ\n➽\n*ꜱᴘᴇᴄɪᴀʟ ᴛʜᴀɴᴋꜱ ᴛᴏ* :\n➽ ᴀʟʟᴀʜ ꜱᴡᴛ\n➽ ғxᴄ7\n➽ ᴍʜᴀɴᴋʙᴀʀʙᴀʀ\n➽ ᴀɴᴋᴇʀ\n➽Affis junianto\n➽ Angga\n➽ Herman Chanel`
					const daca = fs.readFileSync('lord.jpg');
				    herman.sendMessage(from, daca, image, {quoted: fvideo, caption: teks})
					break 
					case 'addprem':
					herman.updatePresence(from, Presence.composing)
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					addpremium = mek.message.extendedTextMessage.contextInfo.mentionedJid
					premium = addpremium
					reply(`*Berhasil Menambahkan ${premium} Ke database User Premium*`)
					break
				case 'delprem':
					if (!isOwner) return reply(mess.only.ownerB)
					rprem = body.slice(13)
					premium.splice(`${rprem}@s.whatsapp.net`, 1)
					reply(`Berhasil Remove wa.me/${rprem} Dari User Premium`)
					break
case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
       case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
       case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
       case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
   	case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
               	  
			   
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
case 'report': // jan di ganti anjeng emang lu bisa fix bug?
                if (!isUser) return reply(mess.only.userB)
                if (args.length < 1) return reply(`Yang mau direport apaan? Contoh: #report fitur #info error`)
          				
                     const pesan = body.slice(8)
                      if (pesan.length > 300) return herman.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var nomor = mek.participant
                       const tekst1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`

                      var options = {
                         text: tekst1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    herman.sendMessage('6283146208804@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.')
                    break
          case 'hidetag':
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(9)
					var group = await herman.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					herman.sendMessage(from, options, text,{quoted :mek})
					break
          case 'randombokep':
				herman.updatePresence(from, Presence.composing) 
				if (isPrem) return reply(mess.only.premium)    
				if (!isUser) return reply(mess.only.userB)
								
				 data = fs.readFileSync('./lib/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply(mess.wait)
                 randTeks = randKey.teks
                 herman.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
	case 'kicktime':
					if (!isUser) return reply(mess.only.userB)
									
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					herman.sendMessage(from, 'Yok Sama" Al-fatihah', text)
					}, 8000)
					setTimeout( () => {
					reply('sukses min:D')
					}, 7000)
					setTimeout( () => {
					herman.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					herman.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					herman.sendMessage(from, 'Jangan Nangis Yaa', text)
					}, 2500)
					setTimeout( () => {
					reply('Perintah Diterima min:D')
					}, 0)
					break
					case 'delrespon':
          if (!isOwner) return reply('bukan kamu')
          if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
          if (!checkCommands(body.slice(11), commandsDB)) return reply(`Key tersebut tidak ada di database`)
          deleteCommands(body.slice(11), commandsDB)
          reply(`Berhasil menghapus respon dengan key ${body.slice(11)}`)
          break;
          case 'wangy':
if (!q) return
  qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya yametehhhh ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
reply(awikwok)
break
          case 'waifu':
          case 'loli':
          case 'husbu':
          case 'milf':
          case 'cosplay':
          case 'wallml':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `🐲Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'🍁OWNER'},type:1}]
              imageMsg = ( await herman.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Tetaplah Bahagia', imageMessage: imageMsg,
              contentText:`YT Herman Chanel`,buttons,headerType:4}
              prep = await agam.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              herman.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
          case 'tourl':
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await herman.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
		  case 'addrespon':
          if (!isOwner) return reply('bukan kamu')
          if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input1 = body.slice(11)
          if (!input1.includes('|')) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input = input1.split("|")
          if (checkCommands(input[0], commandsDB) === true) return reply(`Command tersebut sudah ada`)
          addCommands(input[0], input[1], sender, commandsDB) 
          reply(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
    break
case 'neko': 
ini_result = await fetchJson(`https://xnxxapi.herokuapp.com/api/nsfw/nsfwNeko?apikey=xnxx`)
get_result = ini_result.result
ini_img = await getBuffer(get_result)
herman.sendMessage(from, ini_img, image, {quoted:ftrol})
break

                  	case 'delete':
					case 'del':
					case 'd':
					if (!isGroup)return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					herman.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'spongebob':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await herman.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/knights/spongebob?apikey=hardianto&pp=${anu.display_url}`)
	 herman.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Anjim🗿')
	}
	break
case 'patrick':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await herman.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/knights/patrick?apikey=hardianto&pp=${anu.display_url}`)
	 herman.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana anjim 🗿')
	}
	break
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
herman.sendMessage(from, buffer, sticker, { quoted: mek })
break
case 'toimg':
if (!isQuotedSticker) return reply('Reply Stickernya')
encmedia = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await herman.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, Pada Saat Mengkonversi Sticker Ke Gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subscribe Herman Chanel`)
fs.unlinkSync(ran)
})
break
//▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(Herman Chanel)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//
               case 'smeme':
             if(!c) return reply(`Example :Reply sticker dengan Caption${prefix + command} herman` )
             if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
             ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
             reply(mess.wait)
             owgi = await herman.downloadMediaMessage(ger)
             await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
             var imgbb = require('imgbb-uploader')
             anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", './stickmeme.jpeg')
             teks = `${anu.display_url}`
             sendStickerUrl(from, `https://cililitan.herokuapp.com/api/memegen1?teks=${c}&img_url=${teks}`, mek)
             fs.unlinkSync('./stickmeme.jpeg')
             }
             break
case 'wetglass'://Herman Chanel
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} herman chanel`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    herman.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
case 'kanna':
case 'sagiri':
case 'megumin':
case 'wallnime':
reply(mess.wait)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey1}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await herman.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'©Created By herman Chanel', imageMessage: imageMsg,
contentText:`Done ✓ Subscribe Herman Chanel`,buttons,headerType:4}
prep = await herman.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
herman.relayWAMessage(prep)
break
case 'ass': 
case 'ahegao': 
case 'yuri': 
case 'panties': 		
ini_result = await fetchJson(`https://xnxxapi.herokuapp.com/api/nsfw/${command}?apikey=xnxx`)
get_result = ini_result.result
ini_img = await getBuffer(get_result)
herman.sendMessage(from, ini_img, image, {quoted:ftrol, thumbnail: Buffer.alloc(0)})
break
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'hentai4everyone':
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${apikey1}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await herman.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'©Created By herman Chanel', imageMessage: imageMsg,
contentText:`Done ✓ Subscribe Herman Chanel`,buttons,headerType:4}
prep = await herman.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
herman.relayWAMessage(prep)
break
case 'bj':
case 'ero':
case 'cum':
case 'feet':
case 'yuri':
case 'trap':
case 'lewd':
case 'feed':
case 'eron':
case 'solo':
case 'gasm':
case 'poke':
case 'anal':
case 'holo':
case 'tits':
case 'kuni':
case 'kiss':
case 'erok':
case 'smug':
case 'baka':
case 'solog':
case 'feetg':
case 'lewdk':
case 'waifu':
case 'pussy':
case 'femdom':
case 'cuddle':
case 'eroyuri':
case 'cum_jpg':
case 'blowjob':
case 'erofeet':
case 'holoero':
case 'classic':
case 'erokemo':
case 'fox_girl':
case 'futanari':
case 'lewdkemo':
case 'wallpaper':
case 'pussy_jpg':
case 'kemonomimi':
case 'nsfw_avatar':
buff = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey1}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await herman.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'©Created By herman Chanel', imageMessage: imageMsg,
contentText:`Done ✓ Subscribe Herman Chanel`,buttons,headerType:4}
prep = await herman.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
herman.relayWAMessage(prep)
break
case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
if (args.length == 0) return reply(`Teksnya Mana ?\nContoh : ${prefix + command} herman Chanel`)
ini_txt = args.join(" ")
getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
herman.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Done ✓ Subscribe Herman Chanel`, quoted : ftrol})
})
break
case 'shadow'://Herman Chanel
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (args.length == 0) return reply(`Teksnya Mana ?\nContoh : ${prefix + command} herman Chanel`)
ini_txt = args.join(" ")
getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
herman.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Done Subscribe Herman Chanel`, quoted : ftrol})
})
break
case 'suit':
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
//▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(Herman Chanel)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//
case 'slot':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            herman.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            break
case 'jadian':
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
case 'bisakah':
  if (!isGroup) return reply(mess.only.group)
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              herman.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: ftrol })
              break
case 'apakah':
  if (!isGroup) return reply(mess.only.group)
              apakah = body.slice(1)
              const iya =['mungkin','bisa jadi','mungkin iya','iya']
              const wa = iya[Math.floor(Math.random() * iya.length)]
              herman.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ wa, text, { quoted: ftrol })
              break
case 'benarkah':
  if (!isGroup) return reply(mess.only.group)
              benarkah = body.slice(1)
              const y =['mungkin benar','salah','benar','mungkin']
              const hoh = y[Math.floor(Math.random() * y.length)]
              herman.sendMessage(from, '*Pertanyaan :* '+benarkah+'\n*Jawaban :* '+ hoh, text, { quoted: ftrol })
              break
       case 'kapankah':
         if (!isGroup) return reply(mess.only.group)
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              herman.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: ftrol })
              break
case 'rate':
rate = body.slice(1)
const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
const te = ra[Math.floor(Math.random() * ra.length)]
herman.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: ftrol })
break
case 'bucin':
              herman.sendMessage(from, "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna tetapi butuh yang tak pernah menyerah", text)
              break
case 'tagall':
                       if (!isGroupAdmins) return reply(mess.only.admin)
                        members_id = []
                        teks = (args.length > 1) ? body.slice(8).trim() : '*Info :*'
                        teks += '\n\n'
                        for (let mem of groupMembers) {
                           teks += `╠➥ @${mem.jid.split('@')[0]}\n`
                           members_id.push(mem.jid)
                        }
                        reply(teks)
                        break
case 'getpp':
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await herman.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            herman.sendMessage(from, pict, image, {quoted: mek})
            break
case 'getinfo':
  if (!isGroup) return reply(mess.only.group)
 var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await herman.getStatus(`${yy}`, MessageType.text)
        var ambl = mek.message.extendedTextMessage.contextInfo.participant
const ncontact = herman.contacts[ambl] != undefined ? herman.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : herman.contacts[ambl].notify || herman.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(`› Name : ${ncontact}\n› Bio : ${p.status}`)
if (p.status == 401) {
reply('[ ! ] User private.')
}
break
        case 'swm':
        case 'stickerwm':
        case 'sticker':
        case 's':
          var a = "Dibuat Oleh Hermansyah";
          var b = "+6283146208804";
          if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
          const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           media = await herman.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          herman.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./lib/stick/data.exif', out, '-o', _out])
          .on('exit', () => {
          herman.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out) 
          } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
          const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          const media = await herman.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          herman.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./lib/stick/data.exif', out, '-o', _out])
          .on('exit', () => {
          herman.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out)       
          } else if (isQuotedSticker){
            const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            media = await herman.downloadAndSaveMediaMessage(encmedia)
            createExif(a, b);
            modStick(media, herman, mek, from)
          } else {
          reply(`Kirim gambar dengan caption ${prefix}swm atau tag gambar yang sudah dikirim`)
          }
          break;
          case 'join':
          if (args.length === 0 ) return reply(`please input params\n${prefix}join _link gc wa_`)
          var link = body.slice(6)
          res = link.replace("https://chat.whatsapp.com/", "");
          done = await herman.acceptInvite(res)
          reply(`berhasil bergabung di ${done.gid}`)
          break;

  case 'help':
        case 'menu':
       if (!isUser) return reply(mess.only.userB)
          var menulist = herman.prepareMessageFromContent(from, {
            "listMessage" :{
              "title": `${ucapanWaktu} kak ${pushname} \n❀Bot Info❀\n❀*Name Bot*: ${botname}\n❀*Owner Bot*: ${name}\n❀*Prefix*: Multi Prefix\n❀*Baterai* ${battery.persen}\nNo Spam No Telfon!!!`,
              "description": `bot ini berjalan selama \n${runtime(process.uptime())} Suport Terus Ya Nanti Bakal Update V3`,
              "buttonText": "Sellect",
              "listType": "SINGLE_SELECT",
              "sections": [{
                "title": `${tanggal()}`,
                "rows": [{
                    "title": "menu",
                    "rowId": "0",
                    "description": "Menampilkan Seluruh Fitur Bot"
                  },{
                    "title": "owner",
                    "rowId": "1",
                    "description": "Owner Bot"
                  },{
                    "title": "donasi",
                    "rowId": "2",
                    "description": "Donasi sekilasnya aja.."
                  }]
              }]
            }
          }, {})
          herman.relayWAMessage(menulist, {waitForAck: false})
          break;    
          case 'leave':
          if (!isGroup) return reply("khusus gc")
          if (!groupAdmins) return reply("khusus group admin")
          herman.groupLeave(from)
          .then((res) => {
            herman.sendMessage(sender, "perintah untuk keluar berhasil di eksekusi", text)
          })
          break;
          case 'darkjokes':
				herman.updatePresence(from, Presence.composing) 
				if (!isUser) return reply(mess.only.userB)
								
				reply(mess.wait)
				 data = fs.readFileSync('./lib/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 herman.sendMessage(from, darkjokes, image, {quoted: mek, caption: '\`\`\`GELAP📸😎\`\`\`'})
				break  
				case 'asupan':
				herman.updatePresence(from, Presence.composing) 
				if (!isUser) return reply(mess.only.userB)
								
				reply(mess.wait)
				 data = fs.readFileSync('./lib/asupan.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 asu = await getBuffer(randKey.result)
                 herman.sendMessage(from, asu, image, {quoted: fvideo, caption: '\`\`\`ASUPAN😎📸\`\`\`'})
				break  
		
          case 'antilink':

	                if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply(mess.only.antiE)
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antilink')
						herman.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var bro = antilink.indexOf(from)
						antilink.splice(bro, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antilink')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break;
					case 'verify':
              
if (isRegister) return reply('Akun kamu sudah terverfikasi')
const serialUser = createSerial(18)
	         try {
								ppimg = await herman.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
	        veri = sender
	         register.push(sender)
	        fs.writeFileSync('./database/regi.json', JSON.stringify(register))
	        addRegisterUser(sender, serialUser)
	     //////   addRegisteredUser(sender, serialUser)
	         const anuu = `「 *PENDAFTARAN USER* 」
*✘⃝⃝🚀 Nama:* ${pushname}
*✘⃝📖 API:* ${sender.split('@')[0]}
*✘⃝🔖 Serial:* ${serialUser}
*✘⃝👤 Total:* ${register.length} Pengguna

*「 BOT WHATSAAP 」*`
         herman = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${register.length}&seri=${serialUser}&pp=${ppimg}&bg=https://telegra.ph/file/42e197bd1f295a71cab5b.jpg`)
             buttons = [{buttonId: `!menu`,buttonText:{displayText: `🏷️MENU`},type:1},{buttonId:`${prefix}sc`,buttonText:{displayText:'SC BOT🚀'},type:1}]
              imageMsg = (await herman.prepareMessageMedia(ikyads, "imageMessage", { thumbnail: ikyads, })).imageMessage
              buttonsMessage = {footerText: 'By Herman Chanel', imageMessage: imageMsg,
              contentText:`${anuu}`,buttons,headerType:4}
              prep = await herman.prepareMessageFromContent(from,{buttonsMessage},{quoted: fmek})
              herman.relayWAMessage(prep)
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
            setTimeout( () => {
			herman.updatePresence(from, Presence.composing)
			reply(`*Terimakasih Telah Daftar Di ${NamaBot}*`)
		}, 2000)
		          man = fs.readFileSync('./🎧/hermanchanel2.mp3');
herman.sendMessage(from, man, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true})
        break;
          case 'owner':
          const vacrd = `BEGIN:VCARD\n`+`VERSION:3.0\n`+
                        `FN:owner Bot\n`+
                        `ORG:Developer ${herman.user.name}\n`+
                        'TEL;type=CELL;type=VOICE;waid=62882220799992' +
                        ':+62882220799992\n' + 
                        'END:VCARD'
          herman.sendMessage(from, {display: "owner Bot", vcard: vacrd}, contact, {quoted: mek})
          man = fs.readFileSync('./🎧/hermanchanel1.mp3');
herman.sendMessage(from, man, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true})
          break;
        case 'github':
          herman.sendMessage(from, "*❏ My github for download this script*\n\nhttp://github.com/Hermanchanel", text)
          break;
          
          case 'yt':
      reply('https://youtube.com/channel/UCPhU6uA_3gUaEvyrFZFgJqg Jangan Lupa Subscribe Ya Kak✨')
      break;
      case 'gc':
      reply('https://chat.whatsapp.com/Kt69lMVe90WLBkCFcoYIyA Jangan lupa masuk ya📌')
      break;
      case 'ig':
      reply('Jangan Lupa Folow Ig Owner Ya @cal_me_herman')
      break;
      case 'herman':
      reply('Y')
      break;
          default:
        if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				herman.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    herman.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			if (budy.startsWith('$')){
if (!isOwner) return reply("anda bukan owner yak:)")
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`@HermanBotz:~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('>')){
if (!isOwner) return reply("anda bukan owner yak:)")
try {
return herman.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: fvideo})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.includes("Herman")){  // JAN DI UBAH TOD
        reply(`*${pushname}*, ngpain manggil owner gw`)
        const d = fs.readFileSync('./media/anjim.webp');
        herman.sendMessage(from, d, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Subscribe Herman Chanel", 'jpegThumbnail': fs.readFileSync('./media/herman.webp')}}}})
        }
if (budy.includes("kontol")){  // JAN DI UBAH TOD
        reply(`*${pushname}*, lu yang kontol`)
        }
        if (budy.includes("🗿")){  
        reply(`Njir Ada Batu Cok`)
        }
         if (budy.includes("asu")){  
        reply(`Ngajak Gelud?`)
        }
         if (budy.includes("anj")){  
        reply(`Ngapain Lu Manggil Anjing`)
        }
if (body.startsWith(`${prefix}${command}`)) {
comd = `      ────────────────\nʜᴇɪ *${pushname}* !!!\nperintah/comand *${prefix}${command}*\nTidak Ada Dalam *${prefix}menu*\n      ────────────────`
herman.sendMessage(from, comd, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Woi Subscribe\nHerman Chanel", 'jpegThumbnail': fs.readFileSync('./media/lord.webp')}}}})
				  }
				  	if (budy.includes("bot")){
		herman.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./media/hai.mp3')
        herman.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
if (budy.startsWith('=>')){
if (!isOwner) return reply("anda bukan owner yak:)")
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
          if (isTTT && isPlayer2) {
            if (budy.startsWith("Y")){
              tto = roomttt.filter(gang => gang.id.includes(from))
              tty = tto[0]
              number = tto[0].number;
              teksboard = `*[ TIC TAC TOE GAME ]*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${number[1]}${number[2]}${number[3]}
${number[4]}${number[5]}${number[6]}
${number[7]}${number[8]}${number[9]}

giliran = @${tty.player1.split('@')[0]}`
              herman.sendMessage(from, teksboard, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
            }
            if (budy.startsWith('N')) {
              tto = roomttt.filter(gang => gang.id.includes(from))
              tty = tto[0]
              rooms = roomttt.filter(tokek => !tokek.id.includes(from))
              roomttt = rooms;
              herman.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
            }
          }
          if (isTTT && isPlayer1) {
            noober = parseInt(budy)
            if (isNaN(noober)) return 
            if (noober < 1 || noober > 9) return reply("masukan number dengan benar")
            main = roomttt.filter(gang => gang.id.includes(from))
            if (!defttt.includes(main[0].number[noober])) return reply("number sudah di isi, pilih number lain nya")
            if (main[0].turn.includes(sender)) return reply("tunggu giliran mu dulu ya")
            s = '❎'
            main[0].number[noober] = s
            main[0].turn = main[0].player1
            rooms = roomttt.filter(bang => !bang.id.includes(from))
            roomttt = rooms;
            pop = main[0]
            roomttt.push(pop)
            tto = roomttt.filter(hgh => hgh.id.includes(from))
            tty = tto[0]
            number = tto[0].number;
            ttt = `${number[1]}${number[2]}${number[3]}\n${number[4]}${number[5]}${number[6]}\n${number[7]}${number[8]}${number[9]}`
            
            winningspeech = () => {
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\nyeyyy permainan di menangkan oleh *@${tty.player1.split('@')[0]}*\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              herman.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}}) 
              rooms = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt = rooms 
            }
            if (number[1] == s && number[2] == s && number[3] == s) return winningspeech()
            
            if (number[1] == s && number[4] == s && number[7] == s) return winningspeech()
            
            if (number[1] == s && number[5] == s && number[9] == s) return winningspeech()
            
            if (number[2] == s && number[5] == s && number[8] == s) return winningspeech()
            
            if (number[4] == s && number[5] == s && number[6] == s) return winningspeech()
            
            if (number[7] == s && number[8] == s && number[9] == s) return winningspeech()
            
            if (number[3] == s && number[5] == s && number[7] == s) return winningspeech()
            
            if (number[3] == s && number[6] == s && number[9] == s) return winningspeech()
            
            if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !ttt.includes('5️⃣') && !ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')){
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\npermainan seri Good Game\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              reply(ucapan1)
              naa = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt= naa
            }
            ucapan = `*[ TIC TAC TOE GAME ]*\n\nPlayer1 @${tty.player1.split('@')[0]}=❌\nPlayer2 @${tty.player2.split('@')[0]}=⭕\n\n${ttt}\n\ngiliran = @${tty.player2.split('@')[0]}`
            herman.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
          }
          if (isTTT && isPlayer2) {
            noober = parseInt(budy)
            if (isNaN(noober)) return 
            if (noober < 1 || noober > 9) return reply("masukan number dengan benar")
            main = roomttt.filter(gang => gang.id.includes(from))
            if (!defttt.includes(main[0].number[noober])) return reply("number sudah di isi, pilih number lain nya")
            if (main[0].turn.includes(sender)) return reply("tunggu giliran mu dulu ya")
            s = '🅾️'
            main[0].number[noober] = s
            main[0].turn = main[0].player2
            rooms = roomttt.filter(bang => !bang.id.includes(from))
            roomttt = rooms;
            pop = main[0]
            roomttt.push(pop)
            tto = roomttt.filter(hgh => hgh.id.includes(from))
            tty = tto[0]
            number = tto[0].number;
            ttt = `${number[1]}${number[2]}${number[3]}\n${number[4]}${number[5]}${number[6]}\n${number[7]}${number[8]}${number[9]}`
            //▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(Herman Chanel)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//
            winningspeech = () => {
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\nyeyyy permainan di menangkan oleh *@${tty.player2.split('@')[0]}*\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              herman.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}}) 
              rooms = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt = rooms 
            }
            if (number[1] == s && number[2] == s && number[3] == s) return winningspeech()
            
            if (number[1] == s && number[4] == s && number[7] == s) return winningspeech()
            
            if (number[1] == s && number[5] == s && number[9] == s) return winningspeech()
            
            if (number[2] == s && number[5] == s && number[8] == s) return winningspeech()
            
            if (number[4] == s && number[5] == s && number[6] == s) return winningspeech()
            
            if (number[7] == s && number[8] == s && number[9] == s) return winningspeech()
            
            if (number[3] == s && number[5] == s && number[7] == s) return winningspeech()
            
            if (number[3] == s && number[6] == s && number[9] == s) return winningspeech()
            
            if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !ttt.includes('5️⃣') && !ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')){
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\npermainan seri Good Game\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              reply(ucapan1)
              naa = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt= naa
            }
            ucapan = `*[ TIC TAC TOE GAME ]*\n\nPlayer1 @${tty.player1.split('@')[0]}=❌\nPlayer2 @${tty.player2.split('@')[0]}=⭕\n\n${ttt}\n\ngiliran = @${tty.player1.split('@')[0]}`
            herman.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
          }
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });    //▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(Herman Chanel)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//
};       //▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(Herman Chanel)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//
          //▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(Herman Chanel)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//