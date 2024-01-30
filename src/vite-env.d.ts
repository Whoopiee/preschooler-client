/// <reference types="vite/client" />

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.mp3';

declare module 'flubber';

declare module '*.m4a';
