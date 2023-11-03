import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/stories/**',
    '!**/.storybook/**',
    '!**/.next/**',
    '!{jest,tailwind}.config.ts',
  ],
};

export default createJestConfig(config);
