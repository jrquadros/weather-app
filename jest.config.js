module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts?$': 'babel-jest',
  },
  testEnvironment: 'node',
};
