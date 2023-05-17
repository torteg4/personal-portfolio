const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema();

const Portfolio = mongoose.model("Portfolio", PortfolioSchema)
module.exports = Portfolio;