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
  // client.publish("swimTouch/startTime", new Date().getTime().toString());
});

setTimeout(() => {
  client.publish(
    "swimTouch/jumpTime",
    "route 2 jumpTime " + new Date().getTime().toString()
  );
}, 3000);

setTimeout(() => {
  client.publish(
    "swimTouch/WallSensor",
    "route 2 sensor1 " + new Date().getTime().toString()
  );
}, 10000);

setTimeout(() => {
  client.publish(
    "swimTouch/WallSensor",
    "route 2 sensor2 " + new Date().getTime().toString()
  );
}, 14000);
