// Import required modules
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Get the MongoDB URI from environment variables
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// defining schema for todo

const todoSchema = new mongoose.Schema({
    title: {
      "type" : "String"
    },
    description: {
      "type" : "String"
    },
    completed: {
      "type" : "Boolean"
    }
})

const todo = mongoose.model("todos", todoSchema);

module.exports = todo;