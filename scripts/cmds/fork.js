const cooldown = new Set();

module.exports = {
  config: {
    name: "fork",
    version: "1.0.0",
    author: "Rakib",
    countDown: 5,
    role: 0,
    shortDescription: "Send fork link",
    longDescription: "No prefix command",
    countDown: 5,
    role: 0,
    shortDescription: "Send fork link",
    longDescription: "No prefix command, bot will reply with repo link whenever 'fork' or 'frok' appears (no spam)",
    category: "noPrefix"
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {
    if (!event.body) return;
    const text = event.body.toLowerCase();
    if (text.includes("fork") || text.includes("frok")) {
      if (cooldown.has(event.threadID)) return;
      await message.reply("🔗 Fork Link: https://github.com/islamicbot912-del/-----912");
      cooldown.add(event.threadID);
      setTimeout(() => cooldown.delete(event.threadID), 10000);
    }
  }
};
