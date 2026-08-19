const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/database");

const app = express();

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Basel ERP API is running",
        version: "0.1.0"
    });
});

// Test MySQL connection
async function testDatabase() {
    try {
        const connection = await db.getConnection();

        console.log("MySQL database connected successfully");

        connection.release();
    } catch (error) {
        console.error("MySQL connection failed:", error.message);
    }
}

testDatabase();

// Start server
app.listen(PORT, () => {
    console.log(`Basel ERP Backend running on http://localhost:${PORT}`);
});