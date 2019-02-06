let express = require('express');
let routes = require('./lib/routes');

let app = express();

app.use(function (req, res, next) {
    let startDateTime = new Date();
    res.on('finish', function() {
        let endDateTime = new Date();
        console.info({
          data  : {
            duration: `${endDateTime - startDateTime} ms`,
            req: {
                method: req.method,
                url   : req.originaUrl,
                ip    : req.ip,
                dateTime: startDateTime
              },
            res: {
                dateTime: endDateTime,
                status_code: res.statusCode
              }
          }
        });
    });

    next();
});

app.use(routes.personRoute);

app.use((req,res,next) => {
  res.status(404).send('Resource Not Found')
});

app.listen(3000, () => console.info('server started...'))
