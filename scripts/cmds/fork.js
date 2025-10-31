module.exports = {
  config: {
    name: "fork",
    version: "1.0.1",
    author: "Rakib",
    countDown: 5,
    role: 0,
    shortDescription: "Send fork link",
    longDescription: "Send the repository fork link when user uses the 'fork' command with prefix",
    category: "utility"
  },

  onStart: async function ({ message }) {
    await message.reply("🔗 Fork Link: https://github.com/islamicbot912-del/-----912");
  }
};
