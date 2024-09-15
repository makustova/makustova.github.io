declare module "*.module.css" {
  const classes: {[key: string]: string};
  export default classes;
}

declare module "*.wav" {
  const src: string;
  export default src;
}

declare module "*.mp3" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.html" {
  const content: string;
  export default content;
}
