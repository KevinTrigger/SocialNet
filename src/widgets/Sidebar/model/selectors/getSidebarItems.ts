import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { SidebarItemType } from "../types/sidebarItem";
import { getRouteAbout, getRouteArticles, getRouteChat, getRouteMain, getRouteProfile } from "shared/const/router";
import AboutIconDeprecated from "shared/assets/icons/about-20-20.svg?react";
import MainIconDeprecated from "shared/assets/icons/main-20-20.svg?react";
import ProfileIconDeprecated from "shared/assets/icons/profile-20-20.svg?react";
import ArticleIconDeprecated from "shared/assets/icons/article-20-20.svg?react";
import ChatIconDeprecated from "shared/assets/icons/messager.svg?react";
import AboutIcon from "shared/assets/icons/info.svg?react";
import MainIcon from "shared/assets/icons/home.svg?react";
import ProfileIcon from "shared/assets/icons/avatar.svg?react";
import ArticleIcon from "shared/assets/icons/article.svg?react";
import ChatIcon from "shared/assets/icons/messager.svg?react";
import { toggleFeatures } from "shared/lib/features";

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemList: SidebarItemType[] = [
      {
        text: 'Главная',
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          on: () => MainIcon,
          off: () => MainIconDeprecated
        }),
        path: getRouteMain(),
      },
      {
        text: 'О сайте',
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          on: () => AboutIcon,
          off: () => AboutIconDeprecated
        }),
        path: getRouteAbout(),
      },
    ]

    if (userData) {
      sidebarItemList.push(
        {
          text: 'Профиль',
          Icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ProfileIcon,
            off: () => ProfileIconDeprecated
          }),
          path: getRouteProfile(userData.id),
          authOnly: true
        },
        {
          text: 'Статьи',
          Icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ArticleIcon,
            off: () => ArticleIconDeprecated
          }),
          path: getRouteArticles(),
          authOnly: true
        },
        {
          text: 'Чат',
          Icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ChatIcon,
            off: () => ChatIconDeprecated
          }),
          path: getRouteChat(),
          authOnly: true
        },
      )
    }
    return sidebarItemList;
  }
)
