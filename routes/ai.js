const express = require('express');
const axios = require('axios');
const router = express.Router();

// Summarize route
router.post("/summarize", async (req, res) => {
    try {
        const { text } = req.body;
        const response = await axios.post("http://127.0.0.1:8000/summarize/", { text });
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "AI Summarization Failed" });
    }
});

module.exports = router;
