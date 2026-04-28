const express = require('express');
const router = express.Router();
const Question = require('../models/Question');
const protect = require('../middleware/auth');

// ─── GET ALL QUESTIONS ───────────────────────────────────────
// GET /api/questions?type=frontend&category=javascript
router.get('/', async (req, res) => {
  try {
    const { type, category } = req.query;
    const filter = {};
    if (type) filter.type = type.toLowerCase();
    if (category) filter.category = category.toLowerCase();

    const questions = await Question.find(filter).sort({ createdAt: 1 });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// ─── GET SINGLE QUESTION ────────────────────────────────────
// GET /api/questions/:id
router.get('/:id', async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json(question);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// ─── CREATE QUESTION ─────────────────────────────────────────
// POST /api/questions
router.post('/', protect, async (req, res) => {
  try {
    const { question, answer, category, type } = req.body;

    if (!question || !answer || !category || !type) {
      return res.status(400).json({ message: 'All fields are required: question, answer, category, type' });
    }

    const newQuestion = await Question.create({
      question,
      answer,
      category,
      type,
    });

    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
});

// ─── UPDATE QUESTION ─────────────────────────────────────────
// PUT /api/questions/:id
router.put('/:id', protect, async (req, res) => {
  try {
    const { question, answer, category, type } = req.body;

    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      { question, answer, category, type },
      { new: true, runValidators: true }
    );

    if (!updatedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.json(updatedQuestion);
  } catch (error) {
    res.status(400).json({ message: 'Update failed', error: error.message });
  }
});

// ─── DELETE QUESTION ─────────────────────────────────────────
// DELETE /api/questions/:id
router.delete('/:id', protect, async (req, res) => {
  try {
    const deletedQuestion = await Question.findByIdAndDelete(req.params.id);

    if (!deletedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.json({ message: 'Question deleted successfully', id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: 'Delete failed', error: error.message });
  }
});

module.exports = router;
