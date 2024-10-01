import React from 'react';
import './timeline.css';

function Timeline({ duration }) {
  const timeMarks = [];
  for (let i = 0; i <= duration; i += 1) {
    timeMarks.push(
      <div key={i} className="time-mark">
        {i}s
      </div>
    );
  }

  return (
    <div className="timeline">
      {timeMarks}
    </div>
  );
}

export default Timeline;
