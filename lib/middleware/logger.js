module.exports = (req, res, next) => {
  let startDateTime = new Date();
  res.on('finish', function() {
      let endDateTime = new Date();
      console.info({
        data  : {
          duration: `${endDateTime - startDateTime} ms`,
          req: {
              method: req.method,
              url   : req.url,
              ip    : req.ip,
              api_version: req.api_version,
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
};
