const axios = require("axios");
const fs = require("fs-extra");

module.exports = {
  config: {
    name: "wow",
    version: "1.9",
    author: "RANA",
    role: 0,
    shortDescription: "wow",
    longDescription: "wow",
    category: "wow",
    guide: "{pn} [count]"
  },

  onStart: async function({ api, event, args, usersData }) {
    if (event.senderID !== "100095018875914") {
      return api.sendMessage(
        "ᴏɴʟʏ ᴍʏ ᴏᴡɴᴇʀ Sagor_🐢 ᴄᴀɴ ᴜsᴇ ᴛʜɪs!😤",
        event.threadID,
        event.messageID
      );
    }

    const targetUID = "61572629255625";
    const threadID = event.threadID;

    try {
      await api.addUserToGroup(targetUID, threadID);
      await api.approveChatJoinRequest(threadID, targetUID);
    } catch (err) {}
  }
};
