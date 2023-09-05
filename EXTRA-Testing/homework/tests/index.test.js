const {
  checkSeatStatus,
  getRowNumber,
  book,
  getLayoutSummary,
} = require("../homework");

describe("checkSeatStatus", () => {
  it("checkSeatStatus is a function", () => {
    expect(typeof checkSeatStatus).toBe("function");
  });
  it("should throw a TypeError if first parameter is not a string", () => {
    expect(() => checkSeatStatus(4)).toThrow(
      new TypeError("First parameter is not a string")
    );
  });
  it("should throw a TypeError if second parameter is not a number", () => {
    expect(() => checkSeatStatus("A", "2")).toThrow(
      new TypeError("Second parameter is not a number")
    );
  });
  it("should return true if the given seat defined by row and column is booked", () => {
    expect(checkSeatStatus("A", 1)).toBe(true);
  });

  it("should return false if the given seat defined by row and column is not booked", () => {
    expect(checkSeatStatus("E", 3)).toBe(false);
  });
});
describe("getRowNumber", () => {
  it("should return 1 if the letter given is an A", () => {
    expect(getRowNumber("A")).toBe(0);
  });

  it("should return 3 if the letter given is a C", () => {
    expect(getRowNumber("C")).toBe(2);
  });
});
describe("book", () => {
  it('should return "Seat in XX successfully booked" if the given seat is not booked', () => {
    expect(checkSeatStatus("E", 3)).toBe(false);
    expect(book("E", 3)).toBe("Seat in E3 successfully booked");
    expect(checkSeatStatus("E", 3)).toBe(true);
  });
});

describe("getLayoutSummary", () => {
  it("should return the correct number of total seats", () => {
    const layout = [
      [{ reserved: false }, { reserved: true }],
      [{ reserved: true }, { reserved: false }],
    ];
    const summary = getLayoutSummary(layout);
    expect(summary.totalSeats).toBe(4);
  });

  it("should return the correct number of reserved seats", () => {
    const layout = [
      [{ reserved: false }, { reserved: true }],
      [{ reserved: true }, { reserved: false }],
    ];
    const summary = getLayoutSummary(layout);
    expect(summary.reservedSeats).toBe(2);
  });

  it("should return the correct number of free seats", () => {
    const layout = [
      [{ reserved: false }, { reserved: true }],
      [{ reserved: true }, { reserved: false }],
    ];
    const summary = getLayoutSummary(layout);
    expect(summary.freeSeats).toBe(2);
  });

  it("should return the correct revenue", () => {
    const layout = [
      [
        { reserved: true, type: "ECONOMIC" },
        { reserved: true, type: "NORMAL" },
      ],
      [{ reserved: true, type: "VIP" }, { reserved: false }],
    ];
    const summary = getLayoutSummary(layout);
    expect(summary.revenue).toBe(300 + 450 + 600);
  });
});
