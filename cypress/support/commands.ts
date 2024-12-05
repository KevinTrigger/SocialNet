import { login } from "./commands/login";

Cypress.Commands.add('login', login);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<void>
    }
  }
}

// Расширяем интерфейс Chainable через модульный подход
export interface LoginCommands {
  login(email: string, password: string): Cypress.Chainable<void>;
}