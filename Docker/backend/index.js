import express from "express";
import cors from "cors"; // Import cors

const app = express();
const PORT = 3000;

// Use CORS to allow all origins
app.use(cors()); // Enable CORS for all domains

app.get("/", (req, res) => {
	res.send("1st docker");
});

app.post("/post", (req, res) => {
	res.send("1st docker");
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
