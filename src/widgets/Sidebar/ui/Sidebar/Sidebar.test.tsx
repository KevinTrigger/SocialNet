import { fireEvent, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";


describe("Testing a sidebar", () => {
  test("test on render sidebar", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("test on collapse sidebar is work", () => {
    componentRender(<Sidebar />);
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
