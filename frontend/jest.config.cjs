module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  collectCoverage: true,
  coverageReporters: ["lcov", "text"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/app/**/*",
    "!src/features/**/*",
    "!src/vite-env.d.ts",
    "!src/setupTests.ts",
  ],
  moduleNameMapper: {
    "^react-leaflet$": "<rootDir>/src/__mocks__/react-leaflet.mock.js",
    "\\.(css|less)$": "identity-obj-proxy",
  },
}
