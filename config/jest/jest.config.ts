import type {Config} from 'jest';
import * as path from 'path';

const config: Config = {
  clearMocks: true,
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  moduleDirectories: [
      "node_modules",
      "src"
    ],
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
  },
  testMatch: [
   '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
  ],
  modulePaths: [
    '<rootDir>src'
  ],
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts']
};

export default config;
