require('dotenv').config()

module.exports =
    {
        'connection':
            {
                'host': process.env.DB_HOST,
                'user': process.env.DB_USER,
                'password': process.env.DB_PASS
            },
        'database': process.env.DB_NAME
    }
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database:'timetable-db-ttms'
    });
    connection.connect(function(err){
        if (err) throw err;

            console.log('connected...')
    });