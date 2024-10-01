import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Testing a button", () => {
  test("with not src", () => {
    const value = "Не удалось загрузить изображение";
    const testingElement = <Avatar />;
    render(testingElement);
    expect(screen.getByAltText(value)).toBeInTheDocument();
  });
  test("with not valid src", () => {
    const value = "Не удалось загрузить изображение";
    const testingElement = <Avatar src={"testimg"} />;
    render(testingElement);
    expect(screen.getByAltText(value)).toBeInTheDocument();
  });
  test("renders component when src is URL", () => {
    const imageURL = "https://cdn-icons-png.flaticon.com/512/168/168726.png";
    render(<Avatar src={imageURL} alt="image" />);
    const image = screen.getByAltText("image");
    expect(image).toHaveAttribute("src", imageURL);
  });
});
