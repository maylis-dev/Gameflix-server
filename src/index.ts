import "dotenv/config";
import express from "express";
import cors from "cors";
import gameRoute from "./routes/games.routes";
import { prisma } from "./prisma/client";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/games", gameRoute);

app.get("/", async (req, res) => {
	try {
		const games = await prisma.game.findMany();
		res.json(games);
	} catch (error) {
		console.log("GET GAMES ERROR:", error);
		res.status(500).json({
			error: "Failed to fetch games",
		});
	}
});

// app.listen(5005, () => {
//   console.log("Server is running on http://localhost:5005");
// });

export default app;
