import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import Star from '@mui/icons-material/Star';
import React from 'react';

// Define types for TimelineElement props
interface TimelineElementProps {
  title?: string;
  subtitle?: string;
  date?: string;
  description?: string;
  iconStyle: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  arrowStyle?: React.CSSProperties;
  type: "work" | "education" | "final";
}

const TimelineElement: React.FC<TimelineElementProps> = ({
  title,
  subtitle,
  date,
  description,
  iconStyle,
  contentStyle,
  arrowStyle,
  type
}) => {
  return (
    <div>
        <VerticalTimelineElement
      className={`vertical-timeline-element--${type}`}
      date={date}
      iconStyle={iconStyle}
      contentStyle={contentStyle || {}}
      contentArrowStyle={arrowStyle || {}}
      icon={<Star />}
    >
      {title && <h3 className="vertical-timeline-element-title">{title}</h3>}
      {subtitle && <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>}
      {description && <p>{description}</p>}
    </VerticalTimelineElement>
    </div>
  );
};

export default TimelineElement;