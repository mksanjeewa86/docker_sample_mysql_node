require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
    try {
        res.status(200).json('hello from node');
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
});

app.listen(process.env.NODE_DOCKER_PORT, () => {
    console.log(`application running on port ${process.env.NODE_DOCKER_PORT}`)
});