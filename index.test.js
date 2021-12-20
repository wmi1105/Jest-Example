const { sum, makeUser, makeRange } = require("./index");

describe("test index.js file", () => {
  it("sums a and b ", () => {
    let result = sum(1, 2);
    expect(result).toBe(3); //expect(확인할 값).toBe(기대값)

    expect(sum(3, 4)).toBe(7);
  });

  it("makes a person", () => {
    expect(makeUser("gildong", 20)).toEqual({
      //객체 비교 toEqual(기대값)
      name: "gildong",
      age: 20,
    });
  });

  it("has 3", () => {
    expect(makeRange(1, 4)).toContain(2); //toContain : 배열안에 특정값이 포함되어 있는지 여부를 확인
  });
});
