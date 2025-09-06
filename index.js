const express = require("express");
const registrationController = require("./controllers/registrationController");

const app = express();
app.use(express.json());

app.post("/registration", registrationController);

const PORT = 7000;
app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
