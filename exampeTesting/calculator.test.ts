import { sum } from "./calculator";

describe("calculator tests", () => {
    it("should return sum correctly", () => {
        expect(sum(1, 2)).toBe(3);
    });
    it("should return sum correctly with negative number", () => {
        expect(sum(-2, 3)).toBe(1);
    });
})