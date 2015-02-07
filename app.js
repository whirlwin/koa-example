koaConfig = require('./koa-config');

app = koaConfig.configure();
app.use(function *(){
    this.body = 'Hello World';
});
app.listen(3000);