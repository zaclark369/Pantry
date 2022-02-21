const { unique_categories } = require("../utils/helpers");

test("unique_categories() returns an array of unique values", () => {
  const categories = ["tomato", "tomato", "celery", "cucumber"];

  expect(unique_categories(categories)).toBe(["tomato", "celery", "cucumber"]);
});
