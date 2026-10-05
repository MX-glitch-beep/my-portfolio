/**
 * Social media and contact link interface definition.
 */
export interface SocialLink {
  id: string;
  platform: string;
  label: string;
  url: string;
  username: string;
}

/**
 * Social channels and contact endpoints.
 */
export const socials: SocialLink[] = [
  {
    id: "github",
    platform: "GitHub",
    label: "GitHub Profile",
    url: "",
    username: "@michaelolorunfemi",
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    label: "LinkedIn Profile",
    url: "",
    username: "Michael Olorunfemi",
  },
  {
    id: "email",
    platform: "Email",
    label: "Direct Email",
    url: "",
    username: "contact@michaelolorunfemi.com",
  },
  {
    id: "x",
    platform: "X (Twitter)",
    label: "X Profile",
    url: "",
    username: "@michaelolorunfemi",
  },
];

/**
 * Backwards-compatible alias export for uppercase constant imports.
 */
export const SOCIAL_LINKS = socials;