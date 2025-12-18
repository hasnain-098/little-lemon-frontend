module.exports = {
  testEnvironment: 'jsdom',  // simulate browser
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest"  // use babel for .js/.jsx/.ts/.tsx
  },
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",  // mock CSS imports
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js" // mock images
  }
};
