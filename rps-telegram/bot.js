const botBuilder = require('claudia-bot-builder');
const telegramTemplate = botBuilder.telegramTemplate;

const gameChoices = ['rock','paper','scissors'];

module.exports = botBuilder(function (request) {
});

module.exports = botBuilder(message => {
  if (message.type === 'telegram')
    if (gameChoices.includes(message.text.toLowerCase())) {
      var userChoice = gameChoices.indexOf(message.text.toLowerCase());
      var botChoice = Math.floor(Math.random() * 3);
      if (userChoice == botChoice) return gameChoices[botChoice] +', tie';
      else if (userChoice == 0 && botChoice == 1) return gameChoices[botChoice] + ", you lose"
      else if (userChoice == 1 && botChoice == 2) return gameChoices[botChoice] + ", you lose"
      else if (userChoice == 2 && botChoice == 0) return gameChoices[botChoice] + ", you lose"
      else if (userChoice == 0 && botChoice == 2) return gameChoices[botChoice] + ", you win"
      else if (userChoice == 1 && botChoice == 0) return gameChoices[botChoice] + ", you win"
      else if (userChoice == 2 && botChoice == 1) return gameChoices[botChoice] + ", you win"
    } else {
      return new telegramTemplate.Text("hi " + message.text)
        .addReplyKeyboard([gameChoices])
        .get();
    }
});

