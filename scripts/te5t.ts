import 'zx/globals';

// max run ./scripts/te5t.ts --arg=testArg

(async () => {
  console.log(argv.arg); // expect 'testArg'
  console.log('max run');
})();
