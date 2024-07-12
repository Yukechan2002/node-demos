const express = require("express");
const app = express();
const port = 3000;

//GET Menu is equal to get the already  present data from DB

app.get("/menu", (req, res) => {
    const newItem=req.query.new
  res.send(`Menu: Small Lemonade, Medium Lemonade, Large Lemonade,${newItem}`);
});

//POST order is equal to inserting new data into DB

app.post("/order", (req, res) => {
  const size = req.query.size;
  res.send(`Thank you order received:${size}`);
});

app.put("/order", (req, res) => {
  const size = req.query.size;
  res.send(`your order updated:${size}`);
});

app.delete("/order", (req, res) => {
  
  res.send(`your order has been deleted`);
});

app.listen(port, () => {
  console.log(`Lemonade stand listening at http://localhost:${port}`);
});
