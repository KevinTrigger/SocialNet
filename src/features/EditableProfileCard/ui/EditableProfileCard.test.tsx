import { screen } from "@testing-library/react";
import { EditableProfileCard } from "./EditableProfileCard";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Profile } from "entities/Profile";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { profileReducer } from "../model/slice/profileSlice";
import userEvent from "@testing-library/user-event";

const profile: Profile = {
  id: "1",
  firstname: "admin",
  lastname: "admin",
  age: 465,
  currency: Currency.USD,
  country: Country.Kazakhstan,
  city: "Moscow",
  username: "admin213",
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: { id: "1", username: "admin" },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe("Testing a EditableProfileCard", () => {
  test("test ON/OFF readonly mode", async () => {
    componentRender(<EditableProfileCard id={"1"} />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );
    expect(
      screen.getByTestId("EditableProfileCardHeader.CancelButton")
    ).toBeInTheDocument();
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.CancelButton")
    );
    await expect(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    ).toBeInTheDocument();
  });

  // test("При отмене значения должны обнуляться", async () => {
  //   componentRender(<EditableProfileCard id="1" />, options);
  //   await userEvent.click(
  //     screen.getByTestId("EditableProfileCardHeader.EditButton")
  //   );

  //   await userEvent.clear(screen.getByTestId("ProfileCard.Firstname"));
  //   await userEvent.clear(screen.getByTestId("ProfileCard.Lastname"));

  //   await userEvent.type(screen.getByTestId("ProfileCard.Firstname"), "user");
  //   await userEvent.type(screen.getByTestId("ProfileCard.Lastname"), "user");

  //   expect(screen.getByTestId("ProfileCard.Firstname")).toHaveValue("user");
  //   expect(screen.getByTestId("ProfileCard.Lastname")).toHaveValue("user");

  //   await userEvent.click(
  //     screen.getByTestId("EditableProfileCardHeader.CancelButton")
  //   );

  //   expect(screen.getByTestId("ProfileCard.Firstname")).toHaveValue("admin");
  //   expect(screen.getByTestId("ProfileCard.Lastname")).toHaveValue("admin");
  // });
});
