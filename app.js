var tmi = require('tmi.js')

var options = {
  options: {
    debug: true
  },
  connection: {
    reconnect: true
  },
  identity: {
    username: "ExampleBot",
    password: "APIKEY"
  },
  channels: ["#example","#example2","example3"]
};

var client = new tmi.client(options);
client.connect();
//Connection Message
client.on('connected', function(address, port, channel) {
  client.action("username", "Hello i am CoffeeBot i am currently in alpha, i love coffee and i like interacting with people, so welcome to the stream and hello.");
});

client.on('chat', function(channel, user, message, self) {
  if(message === "!creatortwitter") {
    client.action("channel", "twitter.com/blankktweets");
  }
  if(message === "!example1") {
    client.action(channel, "example");
  }
  if(message === "!example2") {
    client.action(channel, "example");
  }
  if(message === "!example3") {
    client.action(channel, "example");
  }
  if(message === "!example4") {
    client.action(channel, "example");
  }
  if(message === "!example5") {
    client.action(channel, "example");
  }
  if(message === "!example6") {
    client.action(channel, "example");
  }
  if(message === "!example7") {
    client.action(channel, "example");
  }
});
