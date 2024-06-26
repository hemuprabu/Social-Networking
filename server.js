const express = require("express");
const db = require('./config/connection');
const PORT= process.env.PORT || 3001;

const cwd = process.cwd();
const routes = require('./routes');
const app = express();

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
const activity = cwd.includes('Social-Networking')
  ? cwd.split('Social-Networking')[1]
  : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server for ${activity} running on port ${PORT}!`);
    });
  });