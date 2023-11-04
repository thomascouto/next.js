import nextJest from 'next/jest';
import { Config } from 'jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
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
