import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import Sidebar from "./Sidebar";

describe("Testing a sidebar", () => {
  test("test on render sidebar", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("test on collapse sidebar is work", () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    // по умолчанию - collapsed
    // проверяем, что при клике класс collapsed пропадет
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");

    // проверяем, что при клике класс collapsed появится
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
