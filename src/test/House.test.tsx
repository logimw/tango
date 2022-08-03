import { render } from "@testing-library/react";
import HouseTemplate from "components/templates/HouseTemplate";

describe("Test", () => {
  const houseId = "1";

  const getHouseMock = (
    houseId: string
  ): [Promise<string>, jest.Mock<Promise<string>, [string]>] => {
    const promise = new Promise<string>((res, rej) => {
      res(houseId);
    });
    const getHouse = jest.fn(async (houseId: string): Promise<string> => {
      return promise;
    });

    return [promise, getHouse];
  };

  it("should", function () {
    const houseId = "1";
    const [promise, getHouse] = getHouseMock(houseId);

    const { baseElement } = render(<HouseTemplate house={getHouse} />);
    expect(baseElement).toBeDefined();
  });
});
