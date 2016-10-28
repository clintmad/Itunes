let express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors'),
routes = require('./server-assets/routes/index'),
handlers = require('./utils/handlers'),
server = express(),
port = process.env.PORT || 1685,
http = require('http').Server(server);

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/', express.static(`${__dirname}/public`));
server.use('/api', cors(handlers.corsOptions), routes.router);
server.use('/', handlers.defaultErrorHandler);

http.listen(port, function(){
    console.log(`Creating music on port: ${port}`)
})
