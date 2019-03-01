export default {
  files: ['packages/**/test/*.js'],
  sources: ['packages/**/src/*.js', '!packages/dist/**/*'],
  require: ['@babel/register'],
  verbose: true,
};
