import Image from 'next/image';
import React, { ReactNode } from 'react';

type ImageDescriptionSectionProps = {
    src: string;
    alt: string;
    children: ReactNode;
    className?: string;
};

const ImageDescriptionSection: React.FC<ImageDescriptionSectionProps> = ({ src, alt, children = '', className }) => {
    return (
        <section className={`flex flex-col sm:flex-row items-center rounded-lg p-4 space-y-4 my-12 sm:space-y-0 sm:space-x-4 ${className}`}>
            <Image 
                src={src} 
                alt={alt} 
                className="w-[300px] sm:w-[500px] rounded-lg"
                width={700}
                height={700}
            />
            <div className="text-gray-700 text-base space-y-2">
                    <div className="rounded-full flex-1 w-full flex flex-col justify-between ">
                        {children}
                    </div>
            </div>
        </section>
    );
};

export default ImageDescriptionSection;