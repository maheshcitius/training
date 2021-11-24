function asynf(calback) {
  setTimeout(() => {
    calback("NA");
  }, 1000);
}

describe("My 1st describe suite", () => {
  it("1 test case", (done) => {
    function cb(r) {
      let result = "NA";
      try {
        expect(r).toEqual(result);
        done();
      } catch (e) {}
    }

    asynf(cb);
  });

  it.skip("2 test case", () => {
    expect(10).toEqual(13);
  });
});
