const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotenv.config();

const Question = require('./models/Question');

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, { family: 4 });
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Question.deleteMany({});
    console.log('🗑️  Cleared existing questions');

    // Read JSON data files from the new frontend folder structure
    const frontendPath = path.join(__dirname, '..', 'frontend', 'src', 'data', 'frontendQuestions.json');
    const backendPath = path.join(__dirname, '..', 'frontend', 'src', 'data', 'backendQuestions.json');

    const frontendData = JSON.parse(fs.readFileSync(frontendPath, 'utf-8'));
    const backendData = JSON.parse(fs.readFileSync(backendPath, 'utf-8'));

    // Map frontend questions
    const frontendQuestions = frontendData.map((q) => ({
      question: q.question,
      answer: q.answer,
      category: 'react',
      type: 'frontend',
    }));

    // Map backend questions (they already have categories)
    const backendQuestions = backendData.map((q) => ({
      question: q.question,
      answer: q.answer,
      category: q.category || 'general',
      type: 'backend',
    }));

    // Insert all questions
    const allQuestions = [...frontendQuestions, ...backendQuestions];
    const inserted = await Question.insertMany(allQuestions);

    console.log(`\n📚 Seeded ${inserted.length} questions successfully!`);
    console.log(`   ├── Frontend: ${frontendQuestions.length} questions`);
    console.log(`   └── Backend:  ${backendQuestions.length} questions`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error.message);
    process.exit(1);
  }
};

seedDatabase();
