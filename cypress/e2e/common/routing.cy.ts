import { selectByTestId } from "../../helpers/selectByTestId";

describe('Роутинг', () => {
  describe('НЕавторизованный пользователь', () => {
    it('Переход на главную страницу', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    })

    it('Редирект на главную по отсутствию авторизации', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    })

    it('Несуществующая страница, редирект', () => {
      cy.visit('/randomniyendpoint');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    })

  })
  
  describe('Авторизованный пользователь', () => {
    beforeEach(() => {
      cy.login('admin', '123');
    })
    it('Открытие страницы ProfilePage, доступной только авторизованным', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    })

    it('Открытие страницы ArticlesPage, доступной только авторизованным', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    })
  })

  describe('Доступ по ролям пользователя', () => {
    it('Пользователь с ролью User не может попасть в админ-панель', () => {
      cy.login('usertest', '123');
      cy.visit('/admin');
      cy.get(selectByTestId('ForbiddenPage')).should('exist');
    })

    it('Пользователь с ролью Manager не может попасть в админ-панель', () => {
      cy.login('managertest', '123');
      cy.visit('/admin');
      cy.get(selectByTestId('ForbiddenPage')).should('exist');
    })

    it('Пользователь с ролью Admin имеет доступ в админ-панель', () => {
      cy.login('admintest', '123');
      cy.visit('/admin');
      cy.get(selectByTestId('AdminPanelPage')).should('exist');
    })
  })
})