# Running bot
1. Grab the repo and run:
```sh
$ npm install
```
2. Add a bot integration in Slack [here](https://slack.com/services/new/bot)
3. Run from the command line:
```sh
$ BOT_TOKEN='xoxb-test' node bot.js
```
4. Invite your brand new bot into the channels you'd like it to watch.

## Deploy to Heroku
1. Create an app on Heroku:
```sh
$ heroku create <example-bot>
$ git push heroku master
```
2. Add a bot integration in Slack [here](https://slack.com/services/new/bot)
3. Set variable on Heroku: 
```sh
$ BOT_TOKEN='xoxb-test'
$ APP_PATH='url-of-heroku-app'
```
4. Invite your brand new bot into the channels you'd like it to watch.
5. Check the result:
```sh
$ heroku ps
```

## Example
![Shame Bot Example](./shame_bot.png)