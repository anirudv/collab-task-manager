const express = require("express");
const mongoose = require("mongoose"); //A


const PORT = process.env.PORT || 3002;
const mongoURI = 'mongodb://localhost:27017/myappdatabase'; //A


const app = express();

app.use(express.json()); // Parse JSON bodies. A

//lines 12-23 added by A
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected");
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
});



app.get("/api", (req, res) => {
    res.json({ message: "Hello from Express!" });
  });

// Health check route
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});