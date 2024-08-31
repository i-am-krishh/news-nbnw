const express = require('express');

const path = require('path');



// rest app
const app = express();



// static files
app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
})

// ports
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})