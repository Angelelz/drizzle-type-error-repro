type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
};

declare module '*.png' {
  const content: StaticImageData;
  export = content;
}

declare module '*.webp' {
  const content: StaticImageData;
  export default content;
}

declare module '*.svg' {
  const content: StaticImageData;
  export = content;
}

declare module '*.scss' {
  const content: any;
  export = content;
}
