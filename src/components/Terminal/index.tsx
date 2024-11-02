'use client';

import React, { useState } from 'react';
import { ReactTerminal, TerminalContextProvider } from 'react-terminal';
import { useTerminalCommands } from './hooks/useTerminalCommands';

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
  const [commands, currentPath] = useTerminalCommands();

  return (
    <TerminalContextProvider>
        <div id="terminal" className="w-full h-full flex flex-col gap-10 justify-center items-center text-center py-1">
            <h1 className="text-2xl font-bold">Playground</h1>
            <div className='h-min-[433px] max-h-screen w-min-[600px] w-3/4 h-3/4'>
                <ReactTerminal
                    commands={commands}
                    welcomeMessage={<span>Usa 'help' para ver los comandos disponibles.<br/></span>}
                    prompt={`${currentPath}$ `}
                    theme="material-dark"   
                    errorMessage="Comando no encontrado. Usa 'help' para ver los comandos disponibles."
                />
            </div>
        </div>
    </TerminalContextProvider>
  );
};

export default Terminal;