export default {
  wait1SecondAndError: () => ({
    test: () => new Promise((resolve) => {
      setTimeout(() => {
        resolve(false);
      }, 1000);
    }),
    msg: "waited 1 second",
  }),
  isNotBlankString: () => ({
    test: (val) => val !== "",
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
