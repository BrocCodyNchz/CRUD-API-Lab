const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Team = require('./models/teams.js');
// const cors = require('cors');
// app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());

app.post('/teams', async (req, res) => {
    const createdTeam = await Team.create(req.body);
    res.json(createdTeam);
});

app.get('/teams', async (req, res) => {
    const foundTeams = await Team.find();
    res.json(foundTeams);
});

app.delete('/teams/:teamId', async (req, res) => {
    const deleteTeam = await Team.findByIdAndDelete(req.params.teamId);
    res.json(deleteTeam);
});

app.put('/teams/:teamId', async (req, res) => {
    const updatedTeam = await Team.findByIdAndUpdate(
        req.params.teamId,
        req.body,
        {new: true}
    );
});

app.listen(3000, () => {
  console.log('The express app is ready!');
});