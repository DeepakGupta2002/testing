const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        masg: 'welcome to the app'

    })
})



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("server is runnitn this port", port);
})