const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

// ✅ Serve Static Files
app.use(express.static(path.join(__dirname, "frontend")));

// ✅ Serve index.html for Homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// ✅ API Endpoint (With Images & Descriptions)
app.use('/images', express.static(path.join(__dirname, 'frontend/assets/images')));

app.get("/api/products", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Laptop",
            description: "High-performance laptop with 16GB RAM and SSD.",
            price: 1000,
            image: "/images/laptop.png"
        },
        {
            id: 2,
            name: "Phone",
            description: "Latest smartphone with a stunning display and camera.",
            price: 500,
            image: "/images/phone.png"
        },
        {
            id: 3,
            name: "Headphones",
            description: "Wireless noise-canceling headphones for best sound.",
            price: 100,
            image: "/images/headphones.png"
        }
    ]);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
