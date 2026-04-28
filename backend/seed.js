const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotenv.config();

const Question = require('./models/Question');
const User = require('./models/User');

// ─── SEED ADMIN USER ONLY (preserves questions) ──────────────
const seedAdmin = async () => {
  await mongoose.connect(process.env.MONGODB_URI, { family: 4 });
  console.log('✅ Connected to MongoDB');

  const existing = await User.findOne({ username: 'admin' });
  if (existing) {
    console.log('ℹ️  Admin user already exists — skipping creation');
  } else {
    const hashed = await bcrypt.hash('admin123', 10);
    await User.create({ username: 'admin', password: hashed, role: 'admin' });
    console.log('👤 Admin user created  →  username: admin  /  password: admin123');
  }
};

// ─── SEED QUESTIONS (optional — wipes existing) ──────────────
const seedQuestions = async () => {
  await Question.deleteMany({});
  console.log('🗑️  Cleared existing questions');

  const frontendPath = path.join(__dirname, '..', 'frontend', 'src', 'data', 'frontendQuestions.json');
  const backendPath = path.join(__dirname, '..', 'frontend', 'src', 'data', 'backendQuestions.json');

  const frontendData = JSON.parse(fs.readFileSync(frontendPath, 'utf-8'));
  const backendData = JSON.parse(fs.readFileSync(backendPath, 'utf-8'));

  const frontendQuestions = frontendData.map((q) => ({
    question: q.question,
    answer: q.answer,
    category: 'react',
    type: 'frontend',
  }));

  const backendQuestions = backendData.map((q) => ({
    question: q.question,
    answer: q.answer,
    category: q.category || 'general',
    type: 'backend',
  }));

  const allQuestions = [...frontendQuestions, ...backendQuestions];
  const inserted = await Question.insertMany(allQuestions);

  console.log(`\n📚 Seeded ${inserted.length} questions successfully!`);
  console.log(`   ├── Frontend: ${frontendQuestions.length} questions`);
  console.log(`   └── Backend:  ${backendQuestions.length} questions`);
};

// ─── MAIN ─────────────────────────────────────────────────────
const run = async () => {
  try {
    // Pass --questions flag to also re-seed questions:
    // node seed.js --questions
    const seedQs = process.argv.includes('--questions');

    if (seedQs) {
      await seedQuestions();
    }

    await seedAdmin();

    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error.message);
    process.exit(1);
  }
};

run();
