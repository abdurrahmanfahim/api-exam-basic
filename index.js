const express = require("express");
const mongodb = require("mongodb")
const registrationController = require("./controllers/registrationController");
const registrationWithSchemaController = require("./controllers/registrationWithSchemaController");
const { default: mongoose } = require("mongoose");

const app = express();
app.use(express.json());

const db = "mongodb+srv://ar-fahim-dev:3umqtveWxNu8LFCp@cluster0.jgzxp.mongodb.net/practice?retryWrites=true&w=majority&appName=Cluster0"


mongoose.connect(db).then(() => {
  console.log('mongoDB is connected')
}).catch((error) => {
  console.log('MongoDB connection error:', error)
})


app.post("/registration", registrationController);
app.post("/registration-with-schema", registrationWithSchemaController);

const PORT = 7000;
app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
