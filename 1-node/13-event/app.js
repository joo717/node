const EventEmitter = require("events");
const emitter = new EventEmitter();
const callback1 = (args) => {
  console.log("first callback - ", args);
};
emitter.on("j", callback1);

emitter.on("j", (args) => {
  console.log("second callback - ", args);
});

emitter.emit("j", { message: 1, a: "b" });
emitter.emit("j", { message: 2 });
// emitter.removeListener("j", callback1);
emitter.removeAllListeners();
emitter.emit("j", { message: 3 });
