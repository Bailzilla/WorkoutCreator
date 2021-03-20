const express = require('express');

const app = express();

app.get('/user', (req, res) => {

    res.send('<h1>here is some new fake user data</h1>');
});

// app.post( create new user )
// app.get ( retrieve user history )
// app.put ( add workout to user history )


app.listen(3001,()=>{
    console.log("The server is listening on port 3001 :)");
});