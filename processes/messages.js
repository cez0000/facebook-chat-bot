const request = require('request');
const senderAction = require('../templates/senderAction');
const sendMessage = require('../templates/sendMessage');
const sendGenericTemplate = require('../templates/sendGenericTemplate');
module.exports = function processMessage(event) {
    if (!event.message.is_echo) {
      const message = event.message;
      const senderID = event.sender.id;
      console.log("Received message from senderId: " + senderID);
      console.log("Message is: " + JSON.stringify(message));
    // now we will take the text received and send it to an food tracking API.
      senderAction(senderID);
      // after the response is recieved we will send the details in a Generic template
  
       sendGenericTemplate(senderID,{});
      
  }
}