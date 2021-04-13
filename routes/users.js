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


module.exports = router;