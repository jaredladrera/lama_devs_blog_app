import express from "express";
import cors from 'cors';
import postRoutes from './routes/posts.routes.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/users.routes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/posts", postRoutes);
app.use("/api/auths", authRoutes);
app.use("/api/users", userRoutes);

app.listen(8000, () => {
    console.log("Connected");
})