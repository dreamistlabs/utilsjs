export default {
  compileEnhancements: false,
  extensions: ['ts'],
  files: ['__tests__/*.ts'],
  sources: ['packages/**/src/*.ts', '!packages/dist/**/*'],
  require: ['ts-node/register/transpile-only', 'tsconfig-paths/register'],
  verbose: true,
};
