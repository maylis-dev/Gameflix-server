import "dotenv/config";
import express from "express";
import cors from "cors";
import gameRoute from "./routes/games.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/games", gameRoute);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the WorkUp API!" });
});

app.listen(5005, () => {
  console.log("Server is running on http://localhost:5005");
});

export default app;
