const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const port = 8000;

require("./config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());
require("./routes/portfolio.routes")(app)

app.listen(port, () => console.log(`Listening on port: ${port}`));