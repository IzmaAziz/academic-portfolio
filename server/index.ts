import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist/public directory
app.use(express.static(path.join(import.meta.dirname, "public")));

// Handle all routes by serving index.html (for SPA routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(import.meta.dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
