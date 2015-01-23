/**
 * Created by KJ79607 on 1/23/2015.
 */

var mysql      = require('mysql');
var fs         = require('fs')
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'map',
    password : '***',
    database : 'mapping'
});




    connection.connect();

    connection.query('SELECT * FROM outages', function (err, results) {
        if (err) throw err;
        //fs.writeFile("/curent.json", )
        var output = ('{ "outages" : ' + JSON.stringify(results) + '}');
        //console.log('outages: ', results);
        fs.writeFile("\current.json", output, function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("outage file created at " + new Date().toString());
            }
        })
    });

    connection.end();
