const app = require('./app');
const { testConnection } = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Attempt DB connection test
    await testConnection();

    app.listen(PORT, () => {
      console.log(`🚀 Leafora API Server listening on http://localhost:${PORT}`);
      console.log(`📡 Health endpoint: http://localhost:${PORT}/api/health`);
    });
  } catch (error) {
    console.error('❌ Error starting server:', error.message);
    process.exit(1);
  }
};

startServer();
