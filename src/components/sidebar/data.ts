import { user, userWhite } from "./icons";

export type SidebarLinksTypes = {
  name: string;
  path: string;
  relativePaths: string[];
  icon: string;
  activeIcon: string;
}
export const sidebarLinks: SidebarLinksTypes[] = [
  {
    name: 'users',
    path: '/',
    icon: userWhite,
    activeIcon: user,
    relativePaths: []
  },
 
 
];
