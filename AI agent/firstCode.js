// Get the previous node result (0 or 1)
const result = $('Webhook').first().json.query.chatInput;

// Default output
let outputValue;

// If result is '1', return the chat input from "When chat message received"
if (result === '1') {
  outputValue = $('Webhook').first().json.query.chatInput;
} else {
  outputValue = "Matched"; // you can change this to anything you want
}

// Return result
return [{
  json: {
    result: outputValue
  }
}];
