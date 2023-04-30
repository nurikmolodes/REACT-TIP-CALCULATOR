import {  render, screen } from "@testing-library/react";
import Output from "./MiniCards/Output";

describe("Props Output", () => {
  test("total", () => {
    const {} = render(
      <Output
        people={0}
        resetEverything={() => {}}
        tipAmount={0}
        total={0}
      ></Output>
    );
    const total = Number(screen.getByTestId("total").textContent);
    expect(total).toEqual(NaN)
  });

  test("tipAmount", () => {
    const {} = render(
      <Output
        people={0}
        resetEverything={() => {}}
        tipAmount={0}
        total={0}
      ></Output>
    );
    const tipAmount = Number(screen.getByTestId("tipAmount").textContent);
    expect(tipAmount).toEqual(NaN)
  });
});
