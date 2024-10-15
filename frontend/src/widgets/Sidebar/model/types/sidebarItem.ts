import { FunctionComponent, SVGProps } from "react";

export interface SidebarItemType {
  path: string,
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>,
  text: string,
  authOnly?: boolean;
}