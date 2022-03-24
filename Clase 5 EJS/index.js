/**
 *  Constant Variables
 */
const express = require("express");
const app = express();
const { router } = require('./src/routes/router.js');

/**
*  Settings
*/
app.set("port", 8080);
// view engine config
app.set('view engine', 'ejs');
// views directory config
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
  res.status(200).render('index')
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