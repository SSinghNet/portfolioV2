import * as React from "react";
import { IconSvgProps } from "@/types";

export const DemoIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => (
  <svg fill="currentColor" height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
    <path d="M11.9688 2C6.44875 2 1.96875 6.48 1.96875 12C1.96875 17.52 6.44875 22 11.9688 22C17.4888 22 21.9688 17.52 21.9688 12C21.9688 6.48 17.4988 2 11.9688 2ZM14.9688 14.23L12.0687 15.9C11.7087 16.11 11.3088 16.21 10.9187 16.21C10.5188 16.21 10.1287 16.11 9.76875 15.9C9.04875 15.48 8.61875 14.74 8.61875 13.9V10.55C8.61875 9.72 9.04875 8.97 9.76875 8.55C10.4888 8.13 11.3487 8.13 12.0787 8.55L14.9787 10.22C15.6987 10.64 16.1287 11.38 16.1287 12.22C16.1287 13.06 15.6987 13.81 14.9688 14.23Z" />
  </svg>
);

export const GithubIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => (
  <svg height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
    <path clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" fill="currentColor" fillRule="evenodd" />
  </svg>
);

export const EmailIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => (
  <svg fill="none" height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
    <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const LinkedinIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => (
  <svg fill="currentColor" height={size || height} viewBox="0 0 24 24" width={size || width} {...props}>
    <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" />
    <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" />
    <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" />
  </svg>
);

/* ── Sidebar nav icons (17×17, stroke currentColor, strokeWidth 1.5) ── */

export const NavHomeIcon: React.FC<IconSvgProps> = ({ size = 17, width, height, ...props }) => (
  <svg height={size || height} width={size || width} viewBox="0 0 17 17" fill="none" {...props}>
    <circle cx="8.5" cy="8.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="8.5" cy="8.5" r="2.5" fill="currentColor" />
  </svg>
);

export const NavWorkIcon: React.FC<IconSvgProps> = ({ size = 17, width, height, ...props }) => (
  <svg height={size || height} width={size || width} viewBox="0 0 17 17" fill="none" {...props}>
    <rect x="2" y="6" width="13" height="8.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5.5 6V4.5a3 3 0 013-3h0a3 3 0 013 3V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="2" y1="10" x2="15" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const NavProjectsIcon: React.FC<IconSvgProps> = ({ size = 17, width, height, ...props }) => (
  <svg height={size || height} width={size || width} viewBox="0 0 17 17" fill="none" {...props}>
    <rect x="1.5" y="1.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="9.5" y="1.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="1.5" y="9.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="9.5" y="9.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const NavCertsIcon: React.FC<IconSvgProps> = ({ size = 17, width, height, ...props }) => (
  <svg height={size || height} width={size || width} viewBox="0 0 17 17" fill="none" {...props}>
    <path d="M8.5 1.5L15 4v4.5C15 12.8 8.5 15.5 8.5 15.5S2 12.8 2 8.5V4L8.5 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const NavBlogIcon: React.FC<IconSvgProps> = ({ size = 17, width, height, ...props }) => (
  <svg height={size || height} width={size || width} viewBox="0 0 17 17" fill="none" {...props}>
    <rect x="2.5" y="1.5" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <line x1="5" y1="5.5" x2="12" y2="5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="5" y1="8.5" x2="12" y2="8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="5" y1="11.5" x2="9" y2="11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const NavContactIcon: React.FC<IconSvgProps> = ({ size = 17, width, height, ...props }) => (
  <svg height={size || height} width={size || width} viewBox="0 0 17 17" fill="none" {...props}>
    <rect x="1.5" y="4" width="14" height="9.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M1.5 5.5L8.5 10.5L15.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const NavHeadphonesIcon: React.FC<IconSvgProps> = ({ size = 17, width, height, ...props }) => (
  <svg height={size || height} width={size || width} viewBox="0 0 17 17" fill="none" {...props}>
    <path d="M3 9.5V8.5a5.5 5.5 0 0111 0v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="1.5" y="9" width="3" height="4.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="12.5" y="9" width="3" height="4.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const NavWaveformIcon: React.FC<IconSvgProps> = ({ size = 17, width, height, ...props }) => (
  <svg height={size || height} width={size || width} viewBox="0 0 17 17" fill="none" {...props}>
    <rect x="1" y="5" width="3" height="7" rx="1" fill="currentColor" />
    <rect x="5" y="2" width="3" height="13" rx="1" fill="currentColor" />
    <rect x="9" y="4" width="3" height="9" rx="1" fill="currentColor" />
    <rect x="13" y="6.5" width="3" height="5" rx="1" fill="currentColor" />
  </svg>
);

export const NavMixerIcon: React.FC<IconSvgProps> = ({ size = 17, width, height, ...props }) => (
  <svg height={size || height} width={size || width} viewBox="0 0 17 17" fill="none" {...props}>
    <line x1="1.5" y1="4" x2="15.5" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="10.5" cy="4" r="2" fill="currentColor" />
    <line x1="1.5" y1="8.5" x2="15.5" y2="8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="6" cy="8.5" r="2" fill="currentColor" />
    <line x1="1.5" y1="13" x2="15.5" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="11.5" cy="13" r="2" fill="currentColor" />
  </svg>
);

export const NavShareIcon: React.FC<IconSvgProps> = ({ size = 17, width, height, ...props }) => (
  <svg height={size || height} width={size || width} viewBox="0 0 17 17" fill="none" {...props}>
    <circle cx="13.5" cy="3" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="3.5" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="13.5" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="5.4" y1="7.5" x2="11.6" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="5.4" y1="9.5" x2="11.6" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const CoinPortalIcon: React.FC<IconSvgProps> = ({ size = 18, width, height, ...props }) => (
  <svg height={size || height} width={size || width} viewBox="0 0 20 20" fill="none" {...props}>
    <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="10" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="10" cy="10" r="1.5" fill="currentColor" />
  </svg>
);
