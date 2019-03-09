const baseConfig = require('./jest.config');

const unitTestsJestConfig = {
  displayName: 'unit-tests',
  testMatch: [
    '<rootDir>/src/**/?(*.)unit.test.ts'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts}',
    '!src/types/**',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 40,
      lines: 40
    }
  }
};
module.exports = Object.assign(baseConfig, unitTestsJestConfig);
