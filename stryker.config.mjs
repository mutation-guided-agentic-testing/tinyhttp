// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  packageManager: 'pnpm',
  testRunner: 'vitest',
  buildCommand: 'tsc --noEmit',
  plugins: [
    // '@stryker-mutator/vitest-runner',
    // '@stryker-mutator/typescript-checker',
    // "stryker-reporter-llm"
  ],
  mutate: ['packages/*/src/**/*.ts', '!packages/*/src/**/*.d.ts'],
  testFiles: ['tests/**/*.test.ts'],
  checkers: ['typescript'],
  tsconfigFile: 'tsconfig.json',
  typescriptChecker: {
    prioritizePerformanceOverAccuracy: true
  }
}
export default config
