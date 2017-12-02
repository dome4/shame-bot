const http = require('http')
const request = require('request')


// Slack RTM API
var RtmClient = require('@slack/client').RtmClient;
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;
var rtm = new RtmClient(process.env.BOT_TOKEN);

// Slack Web API
var WebClient = require('@slack/client').WebClient;
var web = new WebClient(process.env.BOT_TOKEN);

// start listening
rtm.start();

/**
 handle every message which has more than 10 characters and reply on the same channel
 */
rtm.on(RTM_EVENTS.MESSAGE, function handleRtmMessage(message) {
    if (message.text.length >= 10 && !message.bot_id) {

        console.log(message.user);

        /**
         * sending message
         */
        // message content
        var channel = message.channel;
        var text = 'Shame on you, <@' + message.user + '>!';
        var attachment = [
            {
                "fallback": "Shame on you!",
                "color": "#FF0000",
                "image_url": "https://pbs.twimg.com/media/Cqu5MhRWcAEz0Wk.jpg",

            }
        ];

        // send response
        web.chat.postMessage(channel, text, { attachments: attachment, as_user: true }, function(err, res) {
            if (err) {
                console.log('Error:', err);
            } else {
                console.log('Message sent: ', res);
            }
        });

    }
    console.log(message);
});

// server
rtm.on(RTM_EVENTS.OPEN, function(){
    var repRequest = request(process.env.APP_PATH, function (error, response, body) {});
    setInterval(repRequest, 25*60*1000);
    console.log('I am up again!');
});

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(index);
}).listen(process.env.PORT || 5000);

