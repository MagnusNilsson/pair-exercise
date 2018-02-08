var expect    = require("chai").expect;
var statistics = require("../app/statistics");

describe("Statistical functions", function() {
  describe("Avg calculation", function() {
    it("calculates the average of an array of numbers", function() {
      var posAvg = statistics.avg([0, 1, 2, 3, 4]);

      expect(posAvg).to.equal(2);
    });
  });

  describe("Std devation of a sample", function() {
    it("calculates the sample standard deviation of an array of numbers", function() {
        throw "not implemented";
    });
  });
});