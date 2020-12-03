/**
 * server 구동을 위한 파일
 * 실행방법: node server.js
 */
// const StaticServer = require('static-server');

// const server = new StaticServer({
//   rootPath: '.', // required, the root of the server file tree
//   port: 8080, // required, the port to listen
//   name: 'car-game-sunmon', // optional, will set "X-Powered-by" HTTP header
//   host: '127.0.0.1', // optional, defaults to any interface
//   cors: '*', // optional, defaults to undefined
//   followSymlink: true, // optional, defaults to a 404 error
//   templates: {
//     index: 'index.html', // optional, defaults to 'index.html'
//   },
// });

// server.start(function () {
//   console.log('Server listening to', server.port);
// });

const liveServer = require('live-server');

const params = {
  port: 8080, // Set the server port. Defaults to 8080.
  host: '0.0.0.0', // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
  root: '.', // Set root directory that's being served. Defaults to cwd.
  open: false, // When false, it won't load your browser by default.
  ignore: 'scss,my/templates', // comma-separated string for paths to ignore
  file: 'index.html', // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
  wait: 500, // Waits for all changes, before reloading. Defaults to 0 sec.
  mount: [['/components', './node_modules']], // Mount a directory to a route.
  logLevel: 0, // 0 = errors only, 1 = some, 2 = lots
  middleware: [
    function (req, res, next) {
      next();
    },
  ], // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};
liveServer.start(params);
