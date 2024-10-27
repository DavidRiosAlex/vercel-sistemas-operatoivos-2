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
  type: "history" | "education";
}

// Define the timeline data
const timelineData: TimelineDataItem[] = [
    {
      title: "GNU Project Foundation",
      subtitle: "Richard Stallman",
      date: "1983",
      description: "The GNU Project is founded by Richard Stallman, aiming to create a free, Unix-like operating system.",
      iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
      type: "history"
    },
    {
      title: "Creation of the Linux Kernel",
      subtitle: "Helsinki, Finland",
      date: "1991",
      description: "Linus Torvalds announces the creation of the Linux kernel and shares it with the community for feedback.",
      iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
      type: "education"
    },
    {
      title: "Linux under GPL License",
      subtitle: "Linus Torvalds",
      date: "1992",
      description: "The Linux kernel is licensed under the GPL, allowing open collaboration and modification.",
      iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
      type: "history"
    },
    {
      title: "Debian Linux Distribution",
      subtitle: "Ian Murdock",
      date: "1993",
      description: "Ian Murdock creates the Debian distribution, emphasizing stability and community-driven development.",
      iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
      type: "education"
    },
    {
      title: "Red Hat Linux",
      subtitle: "Red Hat Inc.",
      date: "1994",
      description: "Red Hat introduces its Linux distribution, which becomes popular in enterprise settings.",
      iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
      type: "history"
    },
    {
      title: "Launch of Ubuntu",
      subtitle: "Canonical Ltd.",
      date: "2004",
      description: "Canonical releases Ubuntu, a user-friendly Linux distribution based on Debian, which rapidly gains popularity.",
      iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
      type: "education"
    },
    {
      title: "Formation of the Linux Foundation",
      subtitle: "Linux Foundation",
      date: "2007",
      description: "The Linux Foundation is established to support and promote the growth of Linux.",
      iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
      type: "history"
    },
    {
      title: "Systemd Introduction",
      subtitle: "Systemd",
      date: "2011",
      description: "Systemd is introduced as a modern initialization system, enhancing system boot time and service management.",
      iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
      type: "education"
    },
    {
      title: "Linux Dominance in Supercomputing and Mobile",
      subtitle: "Linux in Supercomputing and Mobile",
      date: "2020",
      description: "Linux becomes the dominant OS in supercomputing and mobile through its role in the Android OS.",
      iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
      type: "history"
    }
];

export const TimeLine: React.FC = () => {
  return (
    <div id="history" className='w-full h-full'>
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
    </div>
  );
};