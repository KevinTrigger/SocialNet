import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { SidebarItemType } from "../types/sidebarItem";
import AboutIcon from "shared/assets/icons/about.svg?react";
import MainIcon from "shared/assets/icons/main.svg?react";
import ProfileIcon from "shared/assets/icons/profile.svg?react";
import ArticleIcon from "shared/assets/icons/article.svg?react";
import ChatIcon from "shared/assets/icons/messager.svg?react";
import { RoutePath } from "shared/const/router";

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemList: SidebarItemType[] = [
      {
        text: 'Главная',
        Icon: MainIcon,
        path: RoutePath.main,
      },
      {
        text: 'О сайте',
        Icon: AboutIcon,
        path: RoutePath.about,
      },
    ]

    if (userData) {
      sidebarItemList.push(
        {
          text: 'Профиль',
          Icon: ProfileIcon,
          path: RoutePath.profile + userData?.id,
          authOnly: true
        },
        {
          text: 'Статьи',
          Icon: ArticleIcon,
          path: RoutePath.articles,
          authOnly: true
        },
        {
          text: 'Чат',
          Icon: ChatIcon,
          path: RoutePath.chat,
          authOnly: true
        },
      )
    }
    return sidebarItemList;
  }
)
