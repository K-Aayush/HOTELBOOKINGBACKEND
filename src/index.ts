import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import { dbConnection } from './database/dbConnection';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

dbConnection();

app.get("/api/test", async (req: Request, res: Response) => {
    res.json({message: "Nigga"})
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
});