import { checkBit, setBit, toggleBit } from "./bitmask";

describe("bitmask", () => {
  describe("check bit", () => {
    test("is a function", () => {
      expect(checkBit).toBeInstanceOf(Function);
    });

    test("returns a number", () => {
      expect(typeof checkBit(0, 0)).toBe("number");
    });

    test("returns checked bit", () => {
      expect(checkBit(0, 0)).toEqual(0);
      expect(checkBit(1, 1)).toEqual(0);
      expect(checkBit(2, 1)).toEqual(2);
    });
  });

  describe("set bit", () => {
    test("is a function", () => {
      expect(setBit).toBeInstanceOf(Function);
    });

    test("returns a number", () => {
      expect(typeof setBit(1, 0)).toBe("number");
    });

    test("sets bit", () => {
      expect(setBit(1, 0)).toEqual(1);
      expect(setBit(1, 1)).toEqual(3);
    });
  });

  describe("toggle bit", () => {
    test("is a function", () => {
      expect(toggleBit).toBeInstanceOf(Function);
    });

    test("returns a number", () => {
      expect(typeof toggleBit(0, 0)).toBe("number");
    });

    test("returns toggled bit", () => {
      expect(toggleBit(0, 0)).toEqual(1);
      expect(toggleBit(1, 0)).toEqual(0);
      expect(toggleBit(2, 0)).toEqual(3);
    });
  });
});
