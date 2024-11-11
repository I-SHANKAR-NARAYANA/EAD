const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');

router.post('/', async (req, res) => {
  try {
    const alien = new Alien(req.body);
    await alien.save();
    res.status(201).send(alien);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const aliens = await Alien.find();
    res.status(200).send(aliens);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    if (!alien) return res.status(404).send();
    res.status(200).send(alien);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    if (!alien) return res.status(404).send();
    alien.grade = req.body.grade;
    alien.age = req.body.age;
    updatedAlien = await alien.save();
    res.status(200).send(updatedAlien);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const alien = await Alien.findByIdAndDelete(req.params.id);
    if (!alien) return res.status(404).send();
    res.status(200).send(alien);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;