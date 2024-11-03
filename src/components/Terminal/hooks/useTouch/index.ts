import { FileStructure } from "../useFileStructure";

// `touch` command hook
export const useTouch = (
  currentPath: string, 
  getCurrentFolder: () => string[], 
  setFileStructure: (update: (prev: FileStructure) => FileStructure) => void
) => {
  return (fileName: string): string => {
    const fullPath = `${currentPath}/${fileName}`;
    const files = getCurrentFolder();
    
    if (files.includes(fileName)) {
      return `File '${fileName}' already exists.`;
    } else {
      setFileStructure((prev: FileStructure) => {
        // Ensure `prev[currentPath]` is handled as an existing array, or default to an empty array
        const updatedFiles = prev[currentPath] ? [...prev[currentPath], fileName] : [fileName];
        return {
          ...prev,
          [currentPath]: updatedFiles,
        };
      });
      
      sessionStorage.setItem(fullPath, '');  // Create an empty file in session storage
      return `File '${fileName}' created.`;
    }
  };
};