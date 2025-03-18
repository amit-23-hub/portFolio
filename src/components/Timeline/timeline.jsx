import React from 'react';
import VerticalTimeline from './verticalTimeline';
import VerticalTimelineElement from './verticalTimelineElement';
import './Timeline.css'; 


const Timeline = () => {
  return (
    <div>
      <div className='w-full items-center flex justify-center mt-10'>
        <h2 className='headingOfExp' style={{ color: 'white', fontSize: '30px' }}>Experience</h2>
      </div>
      <VerticalTimeline layout="2-columns" animate={true} className="timeline-container">
        <VerticalTimelineElement
          date="11 March 2025"
          icon={<span className="timeline-icon"><img src='#' alt='' className='h-10 w-10'></img></span>}
          position="left"
        >
          <h3 className='underline font-semibold'> Full-Stack Intern at BLU-Parrot</h3>
          <p>Customized software solutions and contributed to international projects, ensuring scalable and efficient development.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="1 March 2025"
          icon={<span className="timeline-icon"></span>}
          position="right"
        >
          <h3 className='underline font-semibold'>• Full Stack Developer at Ambuvians</h3>
          <p>Developed full-stack applications using React with TypeScript, integrated Kafka for high-throughput messaging, and worked with relational and non-relational databases using Prisma.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date=" November 2024"
          icon={<span className="timeline-icon"></span>}
          position="left"
        >
          <h3 className='underline font-semibold'>• Full Stack Developer at Shailja Trust</h3>
          <p>Designed and developed the complete website for Shailja Trust using React for the frontend and AppWrite as the backend service.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="april 2024"
          icon={<span className="timeline-icon"></span>}
          position="right"
        >
          <h3 className='underline font-semibold'>• Full Stack Developer Intern at FTV</h3>
          <p>Optimized REST API performance and enhanced system efficiency using the MERN stack.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="july 2024"
          icon={<span className="timeline-icon"></span>}
          position="left"
        >
          <h3 className='underline font-semibold'>• Joint Secretary At CSSE</h3>
          <p>Led various technical and non-technical events, including hackathons, ideathons, and coding competitions, fostering innovation and collaboration.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
