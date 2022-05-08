export default {
  arrayLengthMustBeEven: () => ({
    test: (val) => val.length % 2 === 0,
    msg: "array length must be even",
  }),
  arrayLengthMustExactlyX: (x) => ({
    test: (val) => val.length === x,
    msg: `array length must be exactly ${x}`,
  }),
};
