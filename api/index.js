import express from "express";
import cors from 'cors';
import postRoutes from './routes/posts.routes.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/users.routes.js';
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ 
    origin: ["http://localhost:3000"], 
    methods: ["POST", "GET"],
    credentials: true,
}));

app.use("/api/posts", postRoutes);
app.use("/api/auths", authRoutes);
app.use("/api/users", userRoutes);

app.listen(8000, () => {
    console.log("Connected");
})