import express from "express";

const app = express();
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Echo endpoint
app.post("/echo", (req, res) => {
  res.json({ echo: req.body });
});

// Only start the server if not running tests
if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

export default app;
