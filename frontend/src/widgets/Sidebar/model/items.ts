import { FunctionComponent, SVGProps } from "react";
import AboutIcon from "shared/assets/icons/about.svg?react";
import MainIcon from "shared/assets/icons/main.svg?react";
import ProfileIcon from "shared/assets/icons/profile.svg?react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export interface SidebarItemType {
  path: string,
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>,
  text: string
}

export const SidebarItemList: SidebarItemType[] = [
  {
    text: 'Главная',
    Icon: MainIcon,
    path: RoutePath.main
  },
  {
    text: 'О сайте',
    Icon: AboutIcon,
    path: RoutePath.about
  },
  {
    text: 'Профиль',
    Icon: ProfileIcon,
    path: RoutePath.profile
  },
]