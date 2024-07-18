const { check, runTest, skipTest } = require("../../test-api/index.js");

function carrotCropCount(gardenPatch) {
  return gardenPatch.flat().filter( (crop) =>  crop === "carrot").length;
}

runTest("counts the carrots when there are only carrots present", function () {
  check(carrotCropCount([["carrot"]])).isEqualTo(1);
  check(carrotCropCount([["carrot", "carrot"]])).isEqualTo(2);
  check(carrotCropCount([["carrot"], ["carrot"]])).isEqualTo(2);
  check(
    carrotCropCount([
      ["carrot", "carrot"],
      ["carrot", "carrot"],
      ["carrot", "carrot"],
    ])
  ).isEqualTo(6);
});

runTest("counts the carrots given mixed veg patch", function () {
  check(carrotCropCount([["carrot", "cabbage"]])).isEqualTo(1);
  check(
    carrotCropCount([["carrot", "radish", "carrot", "beetroot"]])
  ).isEqualTo(2);
  check(carrotCropCount([["carrot", "broccoli"], ["carrot"]])).isEqualTo(2);
  check(
    carrotCropCount([
      ["carrot", "artichoke"],
      ["potato", "beans"],
      ["carrot", "carrot"],
    ])
  ).isEqualTo(3);
});
