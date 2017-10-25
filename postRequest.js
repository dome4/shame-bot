var WebClient = require('@slack/client').WebClient;
var config = require('./config.js');

var web = new WebClient(config.bot_token);

/**
 * message content
 */
var channel = '#general';
var text = 'Whats up?';
var attachment = [
    {
        "fallback": "Shame on you!",
        "color": "#36a64f",
        "pretext": "Optional text that appears above the attachment block",
        "author_name": "Bobby Tables",
        "author_link": "http://flickr.com/bobby/",
        "author_icon": "http://flickr.com/icons/bobby.jpg",
        "title": "Slack API Documentation",
    }
];

web.chat.postMessage(channel, text, { attachments: attachment }, function(err, res) {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log('Message sent: ', res);
    }
});

