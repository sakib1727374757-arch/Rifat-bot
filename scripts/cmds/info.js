const moment = require('moment-timezone');
const axios = require('axios');

module.exports = {
  config: {
    name: "info",
    aliases: ["inf", "in4"],
    version: "3.7",
    author: "RAKIB",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Shows bot and owner info with photo."
    },
    longDescription: {
      en: "Displays detailed information about the bot and owner, including uptime, ping, social links, and local time, with a profile photo."
    },
    category: "Information",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ message }) {
    this.sendInfo(message);
  },

  onChat: async function ({ event, message }) {
    if (event.body && event.body.toLowerCase() === "info") {
      this.sendInfo(message);
    }
  },

  sendInfo: async function (message) {
    const botName = "RAKIB";
    const ownerName = "〲RAKIB卝 〲 হাসানツ࿐";
    const moderatedBy = "〲RAKIB卝 〲 হাসানツ࿐";
    const religion = "ISLAM";
    const botStatus = "SINGLE";
    const address = "JAMALPUR ";
    const userClass = "কলেজ+কওমি মাদ্রাসা";
    const facebook = "https://www.facebook.com/profile.php?id=61580390280524";
    const tiktok = "দিয়া যাবে না. :)🐰";

    const now = moment().tz('Asia/Dhaka');
    const localTime = now.format('hh:mm:ss A');

    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const uptimeString = `${hours}h ${minutes}m ${seconds}s`;

    const start = Date.now();
    await new Promise(resolve => setTimeout(resolve, 100));
    const ping = Date.now() - start;

    const photoUrl = "https://i.ibb.co/SwXznvzv/img-1760502291235.jpg";

    const body = `
╭─ <𝐎𝐖𝐍𝐄𝐑  𝐈𝐍𝐅𝐎> ─╮
├──────────────⍟
│ 👑 𝕆𝕎ℕ𝔼ℝ : ${〲RAKIB卝 〲 হাসানツ࿐}
│ ⚙️ 𝕄𝕆𝔻𝔼ℝ𝔸𝕋𝔼𝔻 𝔹𝕐 : ${〲RAKIB卝 〲 হাসানツ࿐}
│ 🏫 ℂ𝕃𝔸𝕊𝕊 : ${কলেজ+মাদ্রাসা 🩻🐰}
│ 🏠 𝔸𝔻𝔻ℝ𝔼𝕊𝕊 : ${জামালপুর }
│ 🌍 ℝ𝔼𝕃𝕀𝔾𝕀𝕆ℕ : ${🐰🩻}
│ 🧬 𝕊𝕋𝔸𝕋𝕌𝕊 : ${SHIJUKA}
│ 📘 𝔽𝔸ℂ𝔼𝔹𝕆𝕆𝕂 : ${https://www.facebook.com/profile.php?id=61580390280524}
│ 📸 𝕋𝕀𝕂𝕋𝕆𝕂 : ${দিয়া যাবে-না 🩻🐰}
├───────────⍟
│
│𖣘 <𝐁𝐎𝐓  𝐈𝐍𝐅𝐎> 𖣘
├───────────⍟
│ 🤖 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞: ${sʜɪᴊᴜᴋᴀ:)🐰🩻}
│ 🕐 𝐓𝐢𝐦𝐞: ${localTime}
│ 🌀 𝐔𝐩𝐭𝐢𝐦𝐞: ${uptimeString}
│ ⚡ 𝐏𝐢𝐧𝐠: ${ping}𝐦𝐬
╰───────────╯
`;

    try {
      const response = await axios.get(photoUrl, { responseType: 'stream' });
      message.reply({ body, attachment: response.data });
    } catch {
      message.reply("⚠️ Failed to load photo.");
    }
  }
};
