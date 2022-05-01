const {
  NODE_ENV, DATABASE_URI, PORT, TEST_DATABASE_URI,
} = process.env;

const config = {
  database: {
    uri: DATABASE_URI || '',
    testUri: TEST_DATABASE_URI || '',
  },
  port: PORT || 5000,
  nodeEnv: NODE_ENV || 'development',
};

export default config;
