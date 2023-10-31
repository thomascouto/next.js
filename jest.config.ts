import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
};

export default createJestConfig(config);
