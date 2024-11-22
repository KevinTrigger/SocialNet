import type {Config} from 'jest';
import * as path from 'path';

const config: Config = {
  clearMocks: true,
  testEnvironment: "jest-environment-jsdom",
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
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '^entities/(.*)$': '<rootDir>/src/entities/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^shared/(.*)$': '<rootDir>/src/shared/$1',
    '^widgets/(.*)$': '<rootDir>/src/widgets/$1',
  },
  testMatch: [
   '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
  ],
  modulePaths: [
    '<rootDir>src'
  ],
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  reporters: [
    "default",
    ["jest-html-reporters", {
      "publicPath": "",
      "filename": "jest-report.html",
      "openReport": true,
      "darkTheme": true
    }]
  ]
};

export default config;
