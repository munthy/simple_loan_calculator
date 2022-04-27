const express = require("express");
const cors = require("cors");
const loanCalculator = require('./classes/loanCalculator.js')

const calc = new loanCalculator();

const app = express();
const port = 4500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);

  app.post("/seriesloan/*", (req, res) => {
    const [amount, durationMonths, interest] = [req.body.amount, req.body.duration, req.body.interest];
    let data = calc.calculateSeriesLoan(amount, durationMonths, interest);
    res.send(data);
  })

});
