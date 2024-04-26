const winston = require("winston")

const logger = winston.createLogger({
    level:"debug",
    format:winston.format.json(),
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({
            filename:"app.log"
        })
    ]
})


logger.info("An info log")
logger.error("An error log")