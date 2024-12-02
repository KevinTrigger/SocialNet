import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Page } from "widgets/Page/Page";

const AboutPage = () => {
  const { t } = useTranslation("about");
  return (
    <Page>
      <Text
        title={t("О сайте")}
        text={"Проект представляет из себя минимизированную социальную сеть."}
      />
      <Text
        text={
          "Основные технологии, применяемые на проекте: React, Redux Toolkit, Typescript, SCSS modules, Vite, Storybook, Jest & React Testing Library, json-server"
        }
      />
      <Text text={"Архитектурная методология - Feature Sliced Design"} />
      <Text title={"Модули:"} />
      <Text
        text={
          "Модуль 'Авторизация': асинхронные редьюсеры, портал, валидация, сохранение данных текущего пользователя в localStorage;"
        }
      />
      <Text
        text={
          "Модуль 'Профиль пользователя': возможность просмотра своих и чужих профилей, возможность редактирования профиля текущего пользователя;"
        }
      />
      <Text
        text={
          "Модуль 'Статьи': возможность просмотра списка статей в двух вариациях - плитка и список, переход на страницу конкретной статьи, редактирование и создание статьи, отправка комментариев, фильтры, селекторы, поиск;"
        }
      />
      <Text
        title={"Конфигурация и проект: "}
        text={
          "Кастомная конфигурация сборщика Vite, внедрение модульного подхода, изоляция модулей;"
        }
      />
      <Text
        text={
          "Роутинг: работа приложения по принципу SPA, доступ страниц по ролям пользователей, приватные и публичные роуты (для авторизованных и не авторизованных пользователей);"
        }
      />
      <Text
        text={
          "Оптимизация приложения: разбиение основного бандла на чанки, асинхронные редьюсеры, ленивая подгрузка, виртуализация списков, бесконечная лента, анализатор бандла, мемоизация, throttle, debounce, инъекция эндпоинтов;"
        }
      />
      <Text
        text={
          "3 вариации темы приложения. При необходимости внедрить новую тему приложения займёт минимум времени благодаря архитектуре;"
        }
      />
      <Text
        text={
          "Конфигурация Storybook: все компоненты, начиная от страниц до UI-kitа покрыты историями с дополнительной настройкой декораторов: router decorator, store decorator, theme decorator;"
        }
      />
      <Text
        text={
          "Интернационализация i18n: возможность смены языка (русский-английский). Достаточно просто внедрить новый язык;"
        }
      />
      <Text text={"Настройка Prettier, SCSS модули, linter;"} />
      <Text
        text={
          "Кастомный UI-kit: более 20 компонентов: Button, Input, Select, Flex, Avatar, Popup, Skeleton, горизонтальные и вертикальные стеки + применение библиотеки headless UI;"
        }
      />
      <Text
        text={
          "Error Boundary для отлавливания ошибок, отображающий соответствующую страницу;"
        }
      />
      <Text text={"Базовая настройка CI pipeline в рамках Github Pages"} />
      <Text text={"Настройка pre-commit хуков - husky"} />
      <Text
        text={
          "Создание шаблонов для быстрого создания новых страниц, сущностей, фичей или виджетов (папка template в корне проекта)"
        }
      />
      <Text
        title="Тестирование"
        text="Большинство функций, селекторов и компонентов покрыто unit, module - тестами. Внедрено скриншотное тестирование за слежкой изменений в UI. К тестам подключен HTML reporter"
      />
      <Text title="Планы на будущее:" text="! Модуль регистрации" />
      <Text text="! Модуль 'Мессенджер', работающий на основе WebSocket" />
      <Text text="! Переход с JSON-server на что-то более серьезное" />
    </Page>
  );
};

export default memo(AboutPage);
