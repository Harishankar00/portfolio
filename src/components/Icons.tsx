import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const GithubIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const KaggleIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.825 23.859c-.215 0-.43-.081-.594-.243l-8.52-8.497-2.617 2.6V23.6a.25.25 0 01-.25.25H3.6a.25.25 0 01-.25-.25V.4C3.35.262 3.462.15 3.6.15h3.244a.25.25 0 01.25.25v10.536l8.471-8.448a.84.84 0 011.188 0l2.308 2.302c.328.328.328.86 0 1.188L11.516 13.5l8.528 8.505c.328.328.328.86 0 1.188l-2.625 2.423a.833.833 0 01-.594.243z" />
  </svg>
);

export const LeetCodeIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M16.102 17.93l-2.69 2.607c-.466.451-1.211.451-1.677 0l-4.51-4.375a1.237 1.237 0 0 1 0-1.707l1.01-1.025a1.2 1.2 0 0 1 1.66 0l2.71 2.658c.237.228.627.228.864 0l6.32-6.141c.466-.452 1.211-.452 1.678 0l1.01 1.026c.466.452.466 1.185 0 1.637l-6.375 6.32z" />
    <path d="M5.002 14.129a1.22 1.22 0 0 1 0-1.713l8.69-8.49c.467-.456 1.22-.456 1.687 0l1.003 1.018a1.186 1.186 0 0 1 0 1.644l-8.687 8.54c-.467.457-1.22.457-1.687 0l-1.006-1.01z" />
  </svg>
);
