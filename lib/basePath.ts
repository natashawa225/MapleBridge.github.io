export const basePath =
  process.env.NODE_ENV === 'production' ? '/MapleBridge.github.io' : '';

export const withBasePath = (src: string) => `${basePath}${src}`;