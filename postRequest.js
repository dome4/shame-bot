var WebClient = require('@slack/client').WebClient;
var config = require('./config.js');


var web = new WebClient(config.bot_token);

web.chat.postMessage('#general', 'How are you?', function(err, res) {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log('Message sent: ', res);
    }
});

