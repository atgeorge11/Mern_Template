const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use(express.static(__dirname + '/../fe/dist'));

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})