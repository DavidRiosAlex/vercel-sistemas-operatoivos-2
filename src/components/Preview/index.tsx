import React, { ReactNode } from 'react';

interface PreviewComponentProps {
  children: ReactNode
}

const PreviewComponent = ({ children }: PreviewComponentProps) => {
  return (
    <div className="absolute w-[400px] bottom-12 right-12 opacity-75">
      {children}
    </div>
  );
}

export default PreviewComponent;