const express = require('express');
const app = express();
const port = 3003;

app.get('./', (req, res) => {
    res.send('Hello')
})

app.listen(port, () => {
    console.log(`my server ${port}`)
})