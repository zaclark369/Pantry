// require express module
const express = require('express');

// get sequelize connection from config/connection
const sequelize = require('./config/connection');

// import routes
const routes = require('./routes');

const exphbs = require('express-handlebars');
//handlebars helpers
const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });

const path = require('path');

// require session modules
const session = require('express-session');
// import this so we can save session data to our database
const SequelizeStore = require('connect-session-sequelize')(session.Store);

require('dotenv').config();

// create new express app
const app = express();

const PORT = process.env.PORT || 3001;

// session options
const sess = {
    secret: process.env.SESS_KEY,
    cookie: {
        // delete the cookie after 30 minutes
        expires: true,
        maxAge: 30000 * 60
    },
    // reset maxAge counter for every request
    rolling: true,
    resave: false,
    saveUninitialized: true,
    // where to store our session
    store: new SequelizeStore({ db: sequelize })
}

// only looks at requests where the content header matches the type
// returns middleware that parses json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));

app.use(routes);

// sync the database
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening'))
})