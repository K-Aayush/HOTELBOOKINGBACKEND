import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { dbConnection } from "./database/dbConnection";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

dbConnection();

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
