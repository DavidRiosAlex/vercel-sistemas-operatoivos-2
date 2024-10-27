import React, { useState } from 'react';
import { ReactTerminal, TerminalContextProvider } from 'react-terminal';

// Definimos una estructura básica de directorios como un mapa
const fileStructure: { [key: string]: string[] } = {
  "/": ["home", "var", "etc"],
  "/home": ["guest", "documents", "downloads"],
  "/home/guest": ["file1.txt", "file2.txt"],
  "/home/documents": ["resume.pdf", "cover_letter.docx"],
  "/var": ["log"],
  "/var/log": ["system.log", "error.log"],
  "/etc": [],
};

export const Terminal: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>("/"); // Ruta actual

  // Obtiene el contenido de la carpeta actual
  const getCurrentFolder = () => {
    return fileStructure[currentPath] || [];
  };

  // Manejo de comandos
  const commands = {
    ls: () => {
      const folderContent = getCurrentFolder();
      return folderContent.length > 0 ? folderContent.join("  ") : "Directorio vacío";
    },
    cd: (directory: string) => {
      if (directory === "..") {
        // Moverse un directorio hacia arriba
        const newPath = currentPath.split("/").slice(0, -1).join("/") || "/";
        setCurrentPath(newPath);
        return `Movido a: ${newPath}`;
      } else {
        // Navegar hacia una carpeta específica
        const newPath = currentPath === "/" ? `/${directory}` : `${currentPath}/${directory}`;
        if (fileStructure[newPath]) {
          setCurrentPath(newPath);
          return `Movido a: ${newPath}`;
        }
        return `Directorio '${directory}' no encontrado.`;
      }
    },
    pwd: () => currentPath,
    help: (
      <div>
        <p>Comandos disponibles:</p>
        <ul>
          <li><strong>ls</strong> - Lista archivos y directorios en el directorio actual</li>
          <li><strong>cd [directorio]</strong> - Cambia de directorio</li>
          <li><strong>pwd</strong> - Muestra la ruta del directorio actual</li>
          <li><strong>help</strong> - Muestra los comandos disponibles</li>
          <li><strong>clear</strong> - Limpia la terminal</li>
        </ul>
      </div>
    ),
  };

  return (
    <TerminalContextProvider>
      <ReactTerminal
        commands={commands}
        welcomeMessage="Bienvenido al terminal de React! Usa 'help' para ver los comandos disponibles."
        prompt={`${currentPath}$ `}
        theme="material-dark"
        errorMessage="Comando no encontrado. Usa 'help' para ver los comandos disponibles."
      />
    </TerminalContextProvider>
  );
};

export default Terminal;