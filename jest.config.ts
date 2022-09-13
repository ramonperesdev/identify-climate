/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
export default {
  clearMocks: true,
  coverageProvider: "v8",
  moduleNameMapper: {
    "^[@./a-zA-Z0-9$_-]+\\.(jpg|svg)$": "<rootDir>/src/utils/fileMock.ts",
  },
  setupFilesAfterEnv: ["<rootDir>/src/test/setupTests.ts"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
            decorators: true,
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: "automatic",
            },
          },
        },
        module: {
          type: "es6",
          noInterop: false,
        },
      },
    ],
  },
};
