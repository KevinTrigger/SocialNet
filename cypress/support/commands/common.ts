import { USER_LOCALSTORAGE_KEY } from "../../../src/shared/const/localStorage";
import { User } from '../../../src/entities/User/model/types/user';
import { selectByTestId } from "../../helpers/selectByTestId";

export const login = (username: string = 'admintest', password: string = '123') => { 
  cy.request({
    method: 'POST',
    url: 'http://localhost:5000/login',
    body: { 
      username, 
      password 
    },
  }).then(({body}) => {
    window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
    return body;
  });
};

export const getByTestId = (testId: string) => {
  return cy.get(selectByTestId(testId));
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<User>;
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}