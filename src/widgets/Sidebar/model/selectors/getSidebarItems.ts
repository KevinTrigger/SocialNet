import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { SidebarItemType } from "../types/sidebarItem";
import { getRouteAbout, getRouteArticles, getRouteChat, getRouteMain, getRouteProfile } from "shared/const/router";
import AboutIcon from "shared/assets/icons/about.svg?react";
import MainIcon from "shared/assets/icons/main.svg?react";
import ProfileIcon from "shared/assets/icons/profile.svg?react";
import ArticleIcon from "shared/assets/icons/article.svg?react";
import ChatIcon from "shared/assets/icons/messager.svg?react";

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemList: SidebarItemType[] = [
      {
        text: 'Главная',
        Icon: MainIcon,
        path: getRouteMain(),
      },
      {
        text: 'О сайте',
        Icon: AboutIcon,
        path: getRouteAbout(),
      },
    ]

    if (userData) {
      sidebarItemList.push(
        {
          text: 'Профиль',
          Icon: ProfileIcon,
          path: getRouteProfile(userData.id),
          authOnly: true
        },
        {
          text: 'Статьи',
          Icon: ArticleIcon,
          path: getRouteArticles(),
          authOnly: true
        },
        {
          text: 'Чат',
          Icon: ChatIcon,
          path: getRouteChat(),
          authOnly: true
        },
      )
    }
    return sidebarItemList;
  }
)
