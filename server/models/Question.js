const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, 'Question text is required'],
      trim: true,
    },
    answer: {
      type: String,
      required: [true, 'Answer text is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
      lowercase: true,
    },
    type: {
      type: String,
      required: [true, 'Type is required (frontend or backend)'],
      enum: ['frontend', 'backend'],
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
questionSchema.index({ type: 1, category: 1 });

module.exports = mongoose.model('Question', questionSchema);
