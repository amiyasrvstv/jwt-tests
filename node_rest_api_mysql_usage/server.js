const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "/public")));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname + '/public/login.html')));
app.listen(4000, () => console.log('The node_rest_api_mysql_usage server is live at port 4000'));