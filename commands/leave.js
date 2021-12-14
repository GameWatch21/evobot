const i18n = require("../util/i18n");

module.exports = {
  name: "leave",
  aliases: [],
  description: i18n.__("leave.description"),
  execute(message) {
    const { channel } = message.client.voice;
    channel.leave();
    return message.channel.send(i18n.__("leave.leave_message")).catch(console.error);
 }
}