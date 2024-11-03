import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import Star from '@mui/icons-material/Star';
import React from 'react';

interface TimelineElementProps {
  title?: string;
  subtitle?: string;
  date?: string;
  description?: string;
  iconStyle: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  link?: {
    url: string;
    title: string;
  },
  arrowStyle?: React.CSSProperties;
  visible: boolean;
  className?: string;
  type: "history" | "education" | "final" | "no-children";
}

const TimelineElement: React.FC<TimelineElementProps> = ({
  title,
  subtitle,
  date,
  description,
  iconStyle,
  contentStyle,
  arrowStyle,
  type,
  link,
  visible=true,
  className=""
}) => {
  return (
    <div>
        <VerticalTimelineElement
            className={`vertical-timeline-element--${type} ${className}`}
            date={date}
            iconStyle={iconStyle}
            contentStyle={contentStyle || {}}
            contentArrowStyle={arrowStyle || {}}
            icon={<Star />}
            visible={visible}
        >
          {visible ? <div className=' flex flex-col w-full h-full gap-2'>
            {title && <h3 className="vertical-timeline-element-title">{title}</h3>}
            {subtitle && <h4 dangerouslySetInnerHTML={{ __html: subtitle }} className="vertical-timeline-element-subtitle" />}
            {description && <p>{description}</p>}
            {link && <span>ref: <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href={link.url}>{link.title}</a></span>}
          </div> : null}
        </VerticalTimelineElement>
    </div>
  );
};

export default TimelineElement;