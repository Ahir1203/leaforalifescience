const { testConnection } = require('../config/db');

const getHealthStatus = async (req, res, next) => {
  try {
    const isDbConnected = await testConnection();

    res.status(200).json({
      success: true,
      message: 'Leafora Life Science API is running smoothly',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      services: {
        api: 'healthy',
        database: isDbConnected ? 'connected' : 'disconnected / check credentials',
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getHealthStatus,
};
