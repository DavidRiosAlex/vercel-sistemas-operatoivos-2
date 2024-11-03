'use client';

import React from 'react';
import { ReactTerminal, TerminalContextProvider } from 'react-terminal';
import { useTerminalCommands } from './hooks/useTerminalCommands';

export const Terminal: React.FC = () => {
  const [commands, currentPath] = useTerminalCommands();

  return (
    <TerminalContextProvider>
        <div id="terminal" className="w-full h-[600px] sm:h-full flex flex-col gap-10 justify-center items-center text-center py-1">
            <h1 className="text-2xl font-bold">Playground</h1>
            <div className='h-min-[433px] max-h-screen w-min-[600px] w-3/4 h-3/4'>
                <ReactTerminal
                    commands={commands}
                    welcomeMessage={<span>Usa &apos;help&apos; para ver los comandos disponibles.<br/></span>}
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