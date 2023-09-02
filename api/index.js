import express from "express";
import cors from 'cors';
import postRoutes from './routes/posts.routes.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/users.routes.js';
import cookieParser from "cookie-parser";
import multer from 'multer';

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(cors({ 
    origin: ["http://localhost:3000"], 
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
}));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/uploads')
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, Date.now()+file.originalname)
    }
});

const upload = multer({ storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    res.status(200).json(file.filename);
})
app.use("/api/posts", postRoutes);
app.use("/api/auths", authRoutes);
app.use("/api/users", userRoutes);

app.listen(8000, () => {
    console.log("Connected");
})