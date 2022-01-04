const express = require("express");
const connectDB = require("./db/connect");
const app = express();
const cors = require("cors");
const tasks = require("./routes/tasks");
require("dotenv").config();

// middleware

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 9000;

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Sever running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
