import { render } from "@testing-library/react";
import Input from "./MiniCards/Input";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers)

describe(Input, () => {
  it("Bill displays correct initial state", () => {
    const { getByTestId } = render(
      <Input
        bill={0}
        custom={0}
        setPeople={0}
        handleSelect={0}
        isSelected={false}
        people={0}
        percentages={[]}
        setBill={0}
        handleCustom={0}
      />
    );
    const billValue = Number(getByTestId("bill").textContent);
    expect(billValue).toEqual(0);
  });
});
