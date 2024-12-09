// describe('Пользователь заходит на страницу со списком статей', () => {
//   let currentArticleId = '';
  
//   beforeEach(() => {
//     cy.login();
//     cy.createArticle().then(article => {
//       currentArticleId = article.id;
//       cy.visit(`articles`);
//     })
//   });

//   afterEach(() => {
//     cy.removeArticle(currentArticleId);
//   })

//   it('И они успешно загружаются', () => {
//     cy.getByTestId("ArticleList").should('exist');
//     cy.getByTestId("ArticleListItem").should('have.length.greaterThan', 3);
//   })

//   it('И переключение view статей работает', () => {
//     cy.getByTestId("ArticleViewSelector.BIG").click();
//     cy.getByTestId('ArticleListItem').each((item) => {
//       expect(item.attr('class')).to.include('BIG');
//     })
//     cy.getByTestId("ArticleViewSelector.SMALL").click();
//     cy.getByTestId('ArticleListItem').each((item) => {
//       expect(item.attr('class')).to.include('SMALL');
//     })
//   })

//   it('И поиск по статьям работает', () => {
//     const searchInput = cy.getByTestId("ArticlesPageFilters.Search");
//     searchInput.should('exist');
//     cy.createArticle();
//   })
// })