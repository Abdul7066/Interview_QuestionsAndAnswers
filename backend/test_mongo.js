const mongoose = require('mongoose');

// Enable mongoose debugging
mongoose.set('debug', true);

const uri = "mongodb://mdabdulrahemanmdamjed_db_user:rINKNkTt04q7Upiu@ac-vaspyip-shard-00-00.kzsjhw5.mongodb.net:27017,ac-vaspyip-shard-00-01.kzsjhw5.mongodb.net:27017,ac-vaspyip-shard-00-02.kzsjhw5.mongodb.net:27017/interview_qa?ssl=true&replicaSet=atlas-rthzsh-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

async function run() {
  console.log("Connecting...");
  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 10000 });
    console.log("✅ Successfully connected!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Connection failed!");
    console.error(err);
    process.exit(1);
  }
}

run();
