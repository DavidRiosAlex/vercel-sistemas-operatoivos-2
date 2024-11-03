import React, { ReactNode } from 'react';

interface PreviewComponentProps {
  children: ReactNode;
  className?: string;
}

const PreviewComponent = ({ children, className='' }: PreviewComponentProps) => {
  return (
    <div className={"relative sm:absolute w-[400px] sm:bottom-12 sm:right-12 opacity-75 " + className}>
      {children}
    </div>
  );
}

export default PreviewComponent;