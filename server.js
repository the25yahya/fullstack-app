const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
const db = require('./models')
const config = require('./config/config')

app.use(bodyParser.json());

app.use('/api/user', require('./routes/userRoutes'))

db.sequelize.sync().then(()=> {
    const port = config.port;
    app.listen(port, () => console.log(`server running on port ${port}`))
})