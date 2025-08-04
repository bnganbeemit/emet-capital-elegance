declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: any
    ) => void;
  }
}

declare const gtag: (
  command: 'config' | 'event' | 'js' | 'set',
  targetId: string | Date,
  config?: any
) => void;

export {};