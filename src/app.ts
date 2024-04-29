import express from "express";
import { router as endPointsAPI } from "./routes/endPoints.routes";
export const app = express();
//configure the middleware for body requests
app.use(express.json());
app.get("/", (req, res) => {
	res.json({ message: "Server is online" });
});

app.use("/", endPointsAPI)