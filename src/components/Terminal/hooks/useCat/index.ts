export const useCat = (currentPath: string) => {
    return (file: string): string => {
      const fullPath = `${currentPath}/${file}`.replace(/\/\/+/g, '/');
      return sessionStorage.getItem(fullPath) || '';
    };
};