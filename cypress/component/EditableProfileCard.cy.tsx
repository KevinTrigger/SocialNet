import { EditableProfileCard } from "../../src/features/EditableProfileCard/ui/EditableProfileCard";
import { TestProvider } from "../../src/shared/lib/tests/componentRender/componentRender";

const USER_ID = "3";

const options = {
  initialState: {
    user: {
      authData: {
        id: USER_ID,
      },
    },
  },
};

describe("EditableProfileCard.cy.tsx", () => {
  it("playground", () => {
    cy.intercept("GET", "**/profile/*", { fixture: "profile.json" });
    cy.mount(
      <TestProvider options={options}>
        <EditableProfileCard id={USER_ID} />
      </TestProvider>
    );
  });
});
