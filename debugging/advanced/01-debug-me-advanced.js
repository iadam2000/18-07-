const { check, runTest, skipTest } = require("../../test-api/index.js");

function shoutNames(names) {
  if (names.length === 0){
    return names;
  }

  const shoutedNames = names.map((name) => {
    return name + "!";
  });
  return shoutedNames;

}

// Please do not change code below this line. You do not need to alter the tests or the test suite.

runTest(
  "shoutNames should return an empty array if passed no names",
  function () {
    check(shoutNames([])).isEqualTo([]);
  }
);
runTest(
  'shoutNames should return an array of one name with "!" on the end',
  function () {
    check(shoutNames(["Harrison"])).isEqualTo(["Harrison!"]);
  }
);
runTest(
  'shoutNames should return an array of names with "!" on the end',
  function () {
    check(shoutNames(["Hannah", "Lewis", "Harrison", "Rob"])).isEqualTo([
      "Hannah!",
      "Lewis!",
      "Harrison!",
      "Rob!",
    ]);
  }
);