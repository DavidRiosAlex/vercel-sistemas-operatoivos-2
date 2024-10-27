'use client';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from './TimeLineElement';

// Define the type for timeline data items
interface TimelineDataItem {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  iconStyle: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  arrowStyle?: React.CSSProperties;
  type: "work" | "education";
}

// Define the timeline data
const timelineData: TimelineDataItem[] = [
  {
    title: "Creative Director",
    subtitle: "Miami, FL",
    date: "2011 - present",
    description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    contentStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    arrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' },
    type: "work"
  },
  {
    title: "Art Director",
    subtitle: "San Francisco, CA",
    date: "2010 - 2011",
    description: "Creative Direction, User Experience, Visual Design, SEO, Online Marketing",
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    type: "work"
  },
  {
    title: "Web Designer",
    subtitle: "Los Angeles, CA",
    date: "2008 - 2010",
    description: "User Experience, Visual Design",
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    type: "work"
  },
  {
    title: "Web Designer",
    subtitle: "San Francisco, CA",
    date: "2006 - 2008",
    description: "User Experience, Visual Design",
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
    type: "work"
  },
  {
    title: "Content Marketing for Web, Mobile and Social Media",
    subtitle: "Online Course",
    date: "April 2013",
    description: "Strategy, Social Media",
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
    type: "education"
  },
  {
    title: "Agile Development Scrum Master",
    subtitle: "Certification",
    date: "November 2012",
    description: "Creative Direction, User Experience, Visual Design",
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
    type: "education"
  },
  {
    title: "Bachelor of Science in Interactive Digital Media Visual Imaging",
    subtitle: "Bachelor Degree",
    date: "2002 - 2006",
    description: "Creative Direction, Visual Design",
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
    type: "education"
  }
];

export const TimeLine: React.FC = () => {
  return (
    <VerticalTimeline>
      {timelineData.map((item, index) => (
        <TimelineElement
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          date={item.date}
          description={item.description}
          iconStyle={item.iconStyle}
          contentStyle={item.contentStyle}
          arrowStyle={item.arrowStyle}
          type={item.type}
        />
      ))}
      <TimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        type="final"
      />
    </VerticalTimeline>
  );
};