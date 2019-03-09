module.exports = {
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json',
      skipBabel: true
    }
  },
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "^tests/(.*)$": "<rootDir>/tests/$1",
    "^__mocks__/(.*)$": "<rootDir>/__mocks__/$1",
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  testPathIgnorePatterns: [
    '.*/?dist/?.*'
  ],
  transform: {
    '^.+\\.ts$': './node_modules/ts-jest/preprocessor.js'
  },
  testMatch: ['<rootDir>/src/**/?(*.)test.ts', '<rootDir>/tests/**/?(*.)(int).test.ts'],
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/build/']
};
