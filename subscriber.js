var mqtt = require("mqtt");

var options = {
  port: 17022,
  host: "mqtt://m24.cloudmqtt.com",
  clientId:
    "mqttjs_" +
    Math.random()
      .toString(16)
      .substr(2, 8),
  username: "oiidqtdo",
  password: "0TDWlrS_abQd",
  keepalive: 60,
  reconnectPeriod: 1000,
  protocolId: "MQIsdp",
  protocolVersion: 3,
  clean: true,
  encoding: "utf8"
};
var client = mqtt.connect("mqtt://m24.cloudmqtt.com", options);
client.on("connect", function() {
  client.subscribe("swimTouch");
});

//var time = "";
client.on("message", function(topic, message) {
  context = message.toString();
  console.log(context);
});
