const db = require("../db");
const express = require("express");

const router = express.Router();

// get all users
router.get("/all", async (req, res, next) => {
    try {
        const results = await db.query(
            `SELECT * FROM users`);
        return res.json(results.rows);
    } catch (error) {
        console.log(error);
    }
});

// create a new user
router.post("/createUser", async (req, res) => {
    try {
        const { name, password } = req.body;

        const exists = await db.query(
            'SELECT * FROM users where name=$1', [name]
        )

        if (exists.rows.length != 0) {
            return res.status(400).send({ error: "User already exists" });
        }

        const result = await db.query(
            `INSERT INTO users (name, password) 
               VALUES ($1, $2)
               RETURNING id, name, password`,
            [name, password]
        );
        return res.status(201).json(result.rows[0]);
    } catch (error) {
    }
});

// read user
router.post("/read", async (req, res) => {
    try {
        const { name, password } = req.body;

        const result = await db.query(
            'SELECT * FROM users where name=$1 AND password=$2 ', [name, password]
        )
        if (result.rows.length != 0) {
            return res.status(200).json(result.rows);
        }
        return res.status(404).send({ error: "user not found" })

    } catch (error) {
        res.status(404).send({ error: error });
    }
})

module.exports = router;