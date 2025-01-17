"use strict";
/* -------------------------------------------------------
    EXPRESSJS - EJS-BLOG Project with Mongoose
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

require("express-async-errors");

const session = require("cookie-session");
const { openDelimiter } = require("ejs");
app.use(
  session({ secret: process.env.SECRET_KEY || "secret_keys_for_cookies" }),
);
/* ------------------------------------------------------- */
// Accept json data & convert to object:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// defaul delimeter : <% %>
// exp delimeters : << >>, {{ }}, {% %} 
app.set('view engine', 'ejs');
app.set('view options', {
  // delimiter: '%',
  openDelimiter: "{",
  closeDelimiter: "}"
})
app.set('views', './public') //!artık benim viewslerim public klasöründe bulunacak diyoruz.

// Connect to MongoDB with Mongoose:
require("./src/dbConnection");

// Searching&Sorting&Pagination:
app.use(require("./src/middlewares/queryHandler"));

// StaticFiles:
app.use("/assets", express.static("./public/assets"));

// HomePage:
app.all("/", (req, res) => {
  res.redirect("/blog/post");
  // res.send('<h1>Welcome to Blog APP</h1>')
});

// Routes: // VIEWS:
app.use("/blog", require("./src/routes/view"));

// Routes: // API:
app.use("/api/blog", require("./src/routes/api"));

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));

// require("./src/helpers/sync2")();
//!(1) Başlangıçta projeyi ayağa kaldırmak için 2 tane terminal açarız birine nodemon, diğerine npm run ui yazıp çalıştırılır. 
//!(2) Public içine component klasörü oluşturduk!
//!(3) ctrl+shift+p configure snippets oluşturuldu!
//!(4) import=include