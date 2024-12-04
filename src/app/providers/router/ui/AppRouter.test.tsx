import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import AppRouter from "./AppRouter";
import {
  getRouteAbout,
  getRouteAdminPanel,
  getRouteProfile,
} from "shared/const/router";
import { screen } from "@testing-library/dom";
import { UserRole } from "entities/User";

describe("app/router/AppRouter", () => {
  test("Страница должна рендериться", async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    });

    // findByTestId - для асинхронных компонентов
    const page = await screen.findByTestId("AboutPage");

    await expect(page).toBeInTheDocument();
  });

  test("Должна отрендериться NotFoundPage", async () => {
    componentRender(<AppRouter />, {
      route: "/takoistranicinet",
    });

    const page = await screen.findByTestId("NotFoundPage");

    await expect(page).toBeInTheDocument();
  });

  test("Редирект из-за отсутствия роли юзера", async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile("1"),
    });

    // Если пользователь зайдёт по endpoint /profile/:id без админки,
    // произойдёт редирект в MainPage
    const page = await screen.findByTestId("MainPage");

    await expect(page).toBeInTheDocument();
  });

  test("Открытие страницы, доступной только авторизованным юзерам", async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile("1"),
      initialState: {
        user: {
          _inited: true,
          authData: {},
        },
      },
    });

    const page = await screen.findByTestId("ProfilePage");

    expect(page).toBeInTheDocument();
  });

  test("Доступ запрещен (отсутствие роли)", async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          _inited: true,
          authData: { roles: [UserRole.MANAGER] },
        },
      },
    });

    const page = await screen.findByTestId("ForbiddenPage");

    expect(page).toBeInTheDocument();
  });

  test("Доступ разрешен (по роли)", async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          _inited: true,
          authData: { roles: [UserRole.ADMIN] },
        },
      },
    });

    const page = await screen.findByTestId("AdminPanelPage");

    expect(page).toBeInTheDocument();
  });
});
