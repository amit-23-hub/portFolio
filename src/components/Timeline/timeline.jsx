import React from 'react';
import VerticalTimeline from './verticalTimeline';
import VerticalTimelineElement from './verticalTimelineElement';
import './Timeline.css'; // Make sure to import the CSS

import { Link } from 'react-router-dom';


const Timeline = () => {
  return (
    <div>
      <div className='w-full items-center flex justify-center mt-10'>
      <h2 className='headingOfExp' style={{color:'white',fontSize:'30px'}}>Experience</h2>
      </div>
      <VerticalTimeline layout="2-columns" animate={true} className="timeline-container">
        <VerticalTimelineElement
          date="30 September 2024"
          icon={<span className="timeline-icon"><img src='#' alt='' className='h-10 w-10'></img></span>}
          position="left"
        >
          <h3 className='underline font-semibold'>• Quiz(Python & Aptitude)</h3>
          <p>Test your Python programming skills in our exciting Python Quiz organized by the tech society!"</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="20 October 2024"
          icon={<span className="timeline-icon">🕵️‍♂️</span>}
          position="right"
        >
          <h3 className='underline font-semibold'>• Full Stack Developer at Ambuvians</h3>
          <p>"Showcase your debugging skills and solve challenging code errors in our thrilling Codebugger event!"</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="20 November 2024"
          icon={<span className="timeline-icon">💃</span>}
          position="left"
        >
          <h3 className='underline font-semibold'>•  Full Stack Developer at Shailja Trust</h3>
          <p>"Join us for Technocratos, an electrifying event filled with dancing, singing, and an array of exciting performances!"</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="16 December 2024"
          icon={<span className="timeline-icon">📲</span>}
          position="right"
        >
          <h3 className='underline font-semibold'>•  Full Stack Developer Intern at FTV</h3>
          <p>"Unleash your creativity with stunning visuals at Framefiesta, the ultimate multimedia presentation competition!"</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="19 January 2025"
          icon={<span className="timeline-icon">🎙️</span>}
          position="left"
        >
          <h3 className='underline font-semibold'>• Joint Secretary At CSSE</h3>
          <p>"Gain insights from industry leaders at our Expert Talk event, hosted by us"</p>
        </VerticalTimelineElement>
       
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
