const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

// Place an order
router.post("/", async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;