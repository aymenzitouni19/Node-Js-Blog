const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('public'))

app.get('/' , (req , res)=> {
    res.send(path.resolve(__dirname , 'pages/index.html'))

})






app.listen(8080, ()=> console.log('Server listening on port 8080'))