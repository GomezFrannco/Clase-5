/**
 *  Constant Variables
 */
const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const { router } = require('./src/routes/router.js');

/**
*  Settings
*/
app.set("port", 8080);
// handlebars engine config
app.engine('hbs', engine({
  extname: ".hbs",
  defaultLayout: "index.hbs",
  layoutsDir: __dirname + "/src/views/layouts",
  partialsDir: __dirname + "/src/views/partials"
}));
// views config
app.set('view engine', 'hbs');
// views directory
app.set('views', './src/views'); 

/**
*  Middlewares
*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
*  App Routes
*/
app.get("/", (req, res) => {
  res.status(200).render('form')
});

/**
* Router
*/
app.use('/productos', router)

/**
*  Server Listening
*/
app.listen(app.get("port"), () => {
    console.log("Express server listening on port:", app.get("port"));
}).on("error", (err) => {
  console.log("Express server error", err);
});