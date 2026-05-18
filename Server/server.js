const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  if (
    email === "admin@gmail.com" &&
    password === "12345"
  ) {
    return res.status(200).json({
      success: true,
      message: "Login successful",
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials",
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});