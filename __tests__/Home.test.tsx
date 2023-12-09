import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

beforeEach(() => render(<Home />));

describe("Home", () => {
  it("render Home component without errors", () => {
    expect(screen.queryAllByTestId("sobre")).toBeTruthy();
  });

  it("render correct title on section 'sobre'", () => {
    const heading = screen.getByRole("heading", {
      name: "Designer Karen Rodrigues",
    });
    expect(heading).toBeDefined();
  });
  it("render correct title on section 'servicos'", () => {
    const heading = screen.getByRole("heading", {
      name: "Conheça nosso serviços",
    });
    expect(heading).toBeDefined();
  });
});
