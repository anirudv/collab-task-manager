const express = require("express");

const PORT = process.env.PORT || 3002;

const app = express();

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