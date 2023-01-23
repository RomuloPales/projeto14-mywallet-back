import express  from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/auth.routes.js";
import transactionRoutes from "./routes/transactions.routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(authRoutes);
app.use(transactionRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server rodando na porta ${port}`));