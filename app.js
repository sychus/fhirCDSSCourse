const express = require('express')
const path = require('path')
const app = express()
const port = 8085

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/launch', function (req, res) {
    res.sendFile(path.join(__dirname + '/launch.html'));
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})