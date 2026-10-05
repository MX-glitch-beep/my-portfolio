/**
 * Navigation item interface definition.
 */
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

/**
 * Global site navigation links matching application routes.
 */
export const navigation: NavItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
  },
  {
    id: "services",
    label: "Services",
    href: "/services",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
  },
];

/**
 * Backwards-compatible alias export for uppercase constant imports.
 */
export const NAV_ITEMS = navigation;