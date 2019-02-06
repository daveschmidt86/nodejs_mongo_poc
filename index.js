let express = require('express');
let middleware = require('./lib/middleware');
let routes = require('./lib/routes');

let app = express();

app.use(middleware.logger);

app.use(routes.personRoute);

app.use((req,res,next) => {
  res.status(404).send('Resource Not Found')
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`server started, listening on port ${PORT}`))
