import "dotenv/config";
import  express  from "express";
import cors from "cors";
import groupRoutes from "./routes/group.routes";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import placeRoutes from "./routes/place.routes";
import chatRoutes from "./routes/chat.routes";  


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {

  res.json({ message: "Welcome to the WorkUp API!" });
});


app.use("/api/groups", groupRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/user", userRoutes);
app.use("/api/place", placeRoutes);


app.listen(5005, () => {
  console.log("Server is running on http://localhost:5005");
});

export default app;