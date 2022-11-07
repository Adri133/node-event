import http from 'http';
import EventEmitter from 'events';

class App {
  start(port) {
    let emitter = new EventEmitter();
    http.createServer((req, res) => {
      res.statusCode = 200;
      if (req.url === '/') {
        emitter.emit('home', res)
      }
      res.end()
    }).listen(port)
    return emitter;
  }
}

export default new App();
