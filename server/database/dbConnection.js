const mongoose = require('mongoose');

const connectDB = async () => {

  try {
    const DB_OPTIONS = {
      dbName: "NODE_CRUD",
    };
    //mongodb connection string
    const con = await mongoose.connect(process.env.MONGO_URL, DB_OPTIONS, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log(`MongoDb connected successfully`)

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDB;