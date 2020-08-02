
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

const PORT = 3000
const HOST = '0.0.0.0'


router.get('/',function(req, res,) {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.use('/',router);


app.listen(PORT, HOST);
console.log('Server rodando!')
