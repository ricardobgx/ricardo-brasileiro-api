// Imports
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Environment variables
const { PORT } = process.env;

// Server
const app = require("./src/app");

// Start server
app.listen(PORT, () => {
  console.log(`Portfolio API - ${PORT}`);
});
