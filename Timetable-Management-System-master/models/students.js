var mysql = require('mysql')
var dbconfig = require('../config/database')

var connection = mysql.createConnection(dbconfig.connection)

connection.query('\
	CREATE TABLE  IF NOT EXISTS `' + dbconfig.database + '`.`students` ( \
    `uid` INT UNSIGNED PRIMARY KEY, \
    `streamid` INT UNSIGNED NOT NULL, \
    FOREIGN KEY (uid) \
        REFERENCES users(uid) \
        ON DELETE CASCADE,\
    FOREIGN KEY (streamid) \
        REFERENCES streams(streamid) \
        ON DELETE CASCADE \
    )')

connection.end()