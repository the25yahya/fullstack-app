const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
const userRoutes = require('./routes/userRoutes')
const connection = require('./db')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/user', userRoutes);

// Check MySQL connection
connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
      return;
    }
    console.log('Connected to the database');
  });

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})

module.exports = app;