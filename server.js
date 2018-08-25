"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const cookieSession = require('cookie-session');
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const indexRoutes = require("./routes");
const loginRoutes = require("./routes/login");
const logoutRoutes = require("./routes/logout");
const registerRoutes = require("./routes/register");
const resourcesRoutes = require("./routes/resources");
const usersRoutes = require("./routes/users");
const searchRoutes = require("./routes/search");
const likesRoutes = require("./routes/likes");


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

// cookie session
app.use(cookieSession({
  name: 'session',
  keys: ['userId']
}));

app.use("/", indexRoutes(knex));
app.use("/login", loginRoutes(knex));
app.use("/logout", logoutRoutes(knex));
app.use("/register", registerRoutes(knex));
app.use("/resources", resourcesRoutes(knex));
app.use("/users", usersRoutes(knex));
app.use("/search", searchRoutes(knex));
app.use("/likes", likesRoutes(knex));


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});