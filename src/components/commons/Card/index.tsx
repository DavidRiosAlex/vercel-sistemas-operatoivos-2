import Image from "next/image";
import { ReactNode } from "react";

const Card = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <div className={`max-w-sm min-w-[350px] min-h-[500px] h-full flex flex-col justify-between align-center rounded overflow-hidden shadow-lg bg-white ${className}`}>
            {children}
        </div>
    )
};

// Subcomponente para la imagen de la tarjeta
Card.CardImg = ({ src, alt }: { src: string, alt: string }) => (
    <Image className="w-full" src={src} alt={alt} width={600} height={600} />
);

// Subcomponente para el título de la tarjeta
Card.Title = ({ children }: { children: ReactNode }) => (
    <div className="font-bold text-xl mb-2">
        {children}
    </div>
);

// Subcomponente para la descripción de la tarjeta
Card.CardDescription = ({ children }: { children: ReactNode }) => (
    <p className="text-gray-700 text-base">
        {children}
    </p>
);

// Subcomponente para los tags en el pie de la tarjeta
Card.CardFooter = ({ tags }: { tags: { label: string, link?: string }[] }) => (
    <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
            <a key={index} href={tag.link} target="_blank">
                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {tag.label}
                </span>
            </a>
        ))}
    </div>
);

export default Card;
