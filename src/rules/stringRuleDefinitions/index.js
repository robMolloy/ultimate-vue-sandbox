export default {
  isNotBlankString: () => ({
    test: (val) => val === "",
    msg: "cannot accept blank string",
  }),
  stringDoesNotContainX: (someString) => ({
    test: (val) => !val.includes(someString),
    msg: `cannot contain ${someString}`,
  }),
  stringMustContainX: (someString) => ({
    test: (val) => val.includes(someString),
    msg: `must contain ${someString}`,
  }),
  stringMustContainXandY: (x, y) => ({
    test: (val) => val.includes(x) && val.includes(y),
    msg: `must contain ${x} & ${y}`,
  }),
  stringContainsA: () => ({
    test: (val) => val.includes("a"),
    msg: "cannot contain a",
  }),
  stringContainsB: () => ({
    test: (val) => val.includes("b"),
    msg: "cannot contain b",
  }),
};
