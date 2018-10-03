const koa = require('koa');
const koarouter = require('koa-router');
const json = require('koa-json');

const router = new koarouter();

router.get('/', async ctx => {
  console.log('Rouuter', '/', arguments);

  ctx.body = {message: 'Yala yala!'};
});

const app = new koa();
app.use(json());
app.use(router.routes());
app.listen(3001);
console.log('Listening on 3001');

/*
var routes = require('./routes');
var user = require('./routes/user');
var path = require('path');

var app = express();

// all environments
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

*/
