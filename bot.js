var config = require('./config.js');

var RtmClient = require('@slack/client').RtmClient;
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;
var rtm = new RtmClient(config.bot_token);

rtm.start();

/**
 handle every message which has more than 10 characters and reply on the same channel
 */
rtm.on(RTM_EVENTS.MESSAGE, function handleRtmMessage(message) {
    if (message.text.length >= 10) {
        rtm.sendMessage("Hello <@" + message.user + ">!", message.channel);
    }
    console.log(message);
});