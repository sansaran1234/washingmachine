const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000/",
  })
);
app.post("/api/notify", async (req, res) => {
  console.log(req.body);
  try {
    // Forward the request to the target server
    const response = await axios.post(
      "https://notify-api.line.me/api/notify",
      req.body,
      {
        headers: {
          Authorization: `Bearer yC4bEk0p9j3blq7Fd9QvyoF2unCmveNumJHPIgNg4wL`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
