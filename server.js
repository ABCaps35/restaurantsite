const express = require('express');
const cors = require('cors');
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
require('dotenv').config();
require('./server/config/mongoose.config');

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

require('./server/routes/menu.routes')(app);
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );