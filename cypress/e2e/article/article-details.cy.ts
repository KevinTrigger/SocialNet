let currentArticleId = '';

describe('Пользователь заходит на страницу со статьей', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then(article => {
      currentArticleId = article.id;
      cy.visit(`articles/${article.id}`);
    })
  });

  afterEach(() => {
    cy.removeArticle(currentArticleId);
  })

  it('И видит содержимое статьи', () => {
    cy.getByTestId("ArticleDetails.Views.Paragraph").should('exist');
  })

  it('И видит систему рейтинга + может оценить статью', () => {
    cy.intercept('GET', '**/articles/*', {fixture: 'article-details.json'});
    cy.getByTestId("ArticleDetails.Views.Paragraph").should('exist');
    cy.getByTestId("RatingCard").scrollIntoView();
    cy.setRate(4, 'Good job!');
    cy.getByTestId("RatingCard.CardTitle.Title").contains('Спасибо');
  })

  it('И видит список рекомендованных статей', () => {
    cy.getByTestId("ArticleRecommendationList").should('exist');
  })

  it('И видит модуль комментариев + оставляет комментарий', () => {
    cy.getByTestId("ArticleDetails.Views.Paragraph").should('exist');
    cy.getByTestId("CommentForm").scrollIntoView();
    cy.addComment('CYPRESS');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  })
})