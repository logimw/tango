import { getIdsOfHouses } from "utils/getIdsOfHouses";
import { extractNumbersFromString } from "utils/extractNumbersFromString";
import { countDateOfDeath } from "utils/countDateOfDeath";

// describe("Test Table component", () => {
//   const mockData = {
//     aliases: ["Test alias 1", "Test alias 2"],
//     allegiances: ["Test allegiance 1", "Test allegiance 2"],
//     books: ["Book 1"],
//     born: "Test born",
//     culture: "Test culture",
//     died: "",
//     father: "",
//     gender: "male",
//     mother: "",
//     name: "",
//     playedBy: [""],
//     povBooks: [""],
//     spouse: "",
//     titles: [""],
//     tvSeries: [""],
//     url: "",
//   };
//
//   it("should display data", () => {});
// });

describe("Test getIdsOfHouses() function", () => {
  it("should return single house id", () => {
    const mockAllegiances = ["http://api.api/api/333"];
    const singleId = ["333"];

    const result = getIdsOfHouses(mockAllegiances);

    expect(result).toStrictEqual(singleId);
  });
  it("should return 3 house ids", () => {
    const mockAllegiances = [
      "http://api.api/api/333",
      "http://api.api/api/111",
      "http://api.api/api/222",
    ];
    const manyIds = ["333", "111", "222"];

    const result = getIdsOfHouses(mockAllegiances);

    expect(result).toStrictEqual(manyIds);
    expect(result.length).toEqual(3);
  });
});

describe("Test extractNumbersFromString() function", () => {
  it("should return first founded number", () => {
    const mockString = "Test 33 test 111";

    const result = extractNumbersFromString(mockString);

    expect(result).toBeDefined();
    expect(result).toContain("33");
  });
});

describe("Test countDateOfDeath() function", () => {
  it("should return counted death age", () => {
    const mockBirthYear = "33";
    const mockDeathYear = "133";

    const result = countDateOfDeath(mockBirthYear, mockDeathYear);

    expect(result).toEqual("100");
  });
});
