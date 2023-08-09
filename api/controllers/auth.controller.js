import {db} from './../config/db.js'
import bcrypt from 'bcryptjs';

export const addAuth = (req, res) => {
    req.json("from controller");
}

export const register = (req, res) => {
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";
    console.log(req.body);

    db.query(q, [req.body.email, req.body.name], (err, data) =>{
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("user already exist");

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`, `email`, `password`) VALUES(?)";

        const values = [
            req.body.name,
            req.body.email,
            hash
        ];

        db.query(q, [values], (err, data) => {
            if(err) return res.json(err);
            return res.status(200).json("User has been created.");
        })
    })
}

export const login = () => {

}

export const logout = () => {

}