import express from "express";
const app = express();
app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "ok" }));
app.get("/", (req, res) => res.json({ message: "Hello from Project 2 CI/CD & DevSecOps sample!" }));
app.post("/echo", (req, res) => res.json({ echoed: req.body?.input ?? null }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
export default app;
