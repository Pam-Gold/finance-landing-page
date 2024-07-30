const express = require('express');
const app = express();
const port = 3003;

// Your other middleware and routes
app.get('/', (req, res) => {
    res.json({ message: 'Hello from backend'})
})

app.listen(port, () => {
    console.log(`my server ${port}`)
})