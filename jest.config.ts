import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  setupFiles: ['react-app-polyfill/jsdom'], // Polyfills window.fetch
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleNameMapper: {
    // This matches the aliases defined in the `alias` property of the package.json file
    '^common(.*)$': '<rootDir>/src/packages/common$1',
  },
  verbose: true,
  resetMocks: true,
};

export default config;
