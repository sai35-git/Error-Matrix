const path = require('path');
const dns = require('dns');
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require('express');
const mongoose = require('mongoose'); // Fixed: Changed from 'mongooose'
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors()); // Allows your HTML file to communicate with this server

// 1. Connect to MongoDB Atlas (Your URL-encoded password is preserved perfectly)
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://sairakshitham_db_user:mongodb2026@cluster0.xqzjrjf.mongodb.net/errormatrix?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
    .then(() => console.log("🪲 Cybernetic Matrix hooked into MongoDB successfully."))
    .catch(err => console.error("❌ Matrix connection down:", err));

// 2. Define the Bug Schema & Model (Fixed all missing characters/keys here)
const bugSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    priority: { type: String, required: true },
    status: { type: String, required: true },
    desc: { type: String, default: "No additional diagnostics logs saved." }
});
const Bug = mongoose.model('Bug', bugSchema);

// 3. API Routes

// GET: Fetch all bugs from database
app.get('/api/bugs', async (req, res) => {
    try {
        const bugs = await Bug.find().sort({ _id: -1 }); // Newest first
        res.json(bugs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST: Append a new ticket
app.post('/api/bugs', async (req, res) => {
    try {
        const newBug = new Bug(req.body);
        await newBug.save();
        res.status(201).json(newBug);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// PUT: Update status (e.g., solving a ticket)
app.put('/api/bugs/:id', async (req, res) => {
    try {
        const updatedBug = await Bug.findOneAndUpdate(
            { id: req.params.id }, 
            { status: req.body.status },
            { new: true }
        );
        res.json(updatedBug);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE: Remove ticket completely
app.delete('/api/bugs/:id', async (req, res) => {
    try {
        await Bug.findOneAndDelete({ id: req.params.id });
        res.json({ message: "Ticket purged from DB." });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Start listening
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/Errormatrix.html');
});


app.listen(PORT, () => {
  console.log(`Server streaming on port ${PORT}`);
});