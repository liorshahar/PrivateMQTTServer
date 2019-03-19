/* 
  Main Sensor Demo
  this sensor act like nodemcu sensor 1 
  1) get the "start" from caoch interface
  2) send real timestamp 
  3) make beep
  4) sending reaction time
  5) sending touch time
  6) send "connected" for logging
*/

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
  client.subscribe("swimTouch/start");
  client.publish("swimTouch/nodeMCUConnected", "client:Main_sensor");
  client.publish("swimTouch/startTime", new Date().toString());
});

client.on("message", function(topic, message) {
  context = message.toString();
  console.log(context + ": " + topic);
  if (context === "start") {
    console.log("\007");
    client.publish("swimTouch/startTime", "start");
    client.publish("swimTouch/jumpTime", "route 1");
    client.publish("swimTouch/jumpTime", "route 2");
    client.publish("swimTouch/jumpTime", "route 3");
    setTimeout(() => {
      client.publish("swimTouch/WallSensor", "route 1");
    }, 1000);
    setTimeout(() => {
      client.publish("swimTouch/WallSensor", "route 1");
    }, 2000);
    setTimeout(() => {
      client.publish("swimTouch/WallSensor", "route 1");
    }, 3000);
    setTimeout(() => {
      client.publish("swimTouch/WallSensor", "route 1");
    }, 4000);

    setTimeout(() => {
      client.publish("swimTouch/WallSensor", "route 2");
    }, 1010);
    setTimeout(() => {
      client.publish("swimTouch/WallSensor", "route 2");
    }, 2010);
    setTimeout(() => {
      client.publish("swimTouch/WallSensor", "route 2");
    }, 3010);
    setTimeout(() => {
      client.publish("swimTouch/WallSensor", "route 2");
    }, 4010);

    setTimeout(() => {
      client.publish("swimTouch/WallSensor", "route 3");
    }, 1020);
    setTimeout(() => {
      client.publish("swimTouch/WallSensor", "route 3");
    }, 2020);
    setTimeout(() => {
      client.publish("swimTouch/WallSensor", "route 3");
    }, 3020);
    setTimeout(() => {
      client.publish("swimTouch/WallSensor", "route 3");
    }, 4020);
  }
});
