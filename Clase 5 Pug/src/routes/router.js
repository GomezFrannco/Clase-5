/**
 *  Constant variables
 */
const express = require("express");
const router = express.Router();
const { Data } = require("../controllers/data.js");

/**
 *  Routes
 */

router.post("/", (req, res) => {
  const products = new Data();
  const data = req.body;
  products.save(data);
  res.status(200).redirect("http://localhost:8080");
});
router.get("/", (req, res) => {
  try {
    const products = new Data();
    const list = products.read();
    res.status(200).render('list.pug', {
      listLength: list.length > 0,
      list
    });
  } catch (err) {
    res.render("empty");
  }
});

/**
 *  Export
 */
module.exports = { router };
