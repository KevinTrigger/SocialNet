export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.Firstname').clear().type(firstname);
  cy.getByTestId('ProfileCard.Lastname').clear().type(lastname);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
}

export const resetProfile = (profileId: string) => { 
  return cy.request({
    method: 'PUT',
    url: `http://localhost:5000/profile/${profileId}`,
    body: { 
      id: "7",
      firstname: "админтест",
      lastname: "админтестин",
      age: 32,
      currency: "RUB",
      country: "Russia",
      city: "Екатеринбург",
      username: "admintest"
    },
    headers: {
      Authorization: 'randomtoken'
    }
  });
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      resetProfile(profileId: string): Chainable<void>;
      updateProfile(firstname: string, lastname: string): Chainable<void>;
    }
  }
}