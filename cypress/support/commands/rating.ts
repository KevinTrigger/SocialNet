export const setRate = (starCount: number, feedback: string) => { 
    cy.getByTestId(`StarRating.${starCount}`).click();
    cy.getByTestId("RatingCard.Feedback").type(feedback);
    cy.getByTestId('RatingCard.SendButton').click();
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      setRate(starCount: number, feedback: string): Chainable<void>;
    }
  }
}