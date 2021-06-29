import React from 'react';
import ReactBubbleChart from 'react-d3-bubbles';

const bubbles = [
  {
    index: 0,
    name: 'Project 1',
    color: '#f48fb1',
    radius: 56,
  },
  {
    index: 1,
    name: 'Project 2',
    description: 'amazing JS project',
    color: '#ffab91',
    radius: 44,
  },
  {
    index: 2,
    name: 'Project 3',
    color: '#b87fe9',
    radius: 32,
  },
  {
    index: 3,
    name: 'Project 4',
    description: 'hkbkb',
    color: '#64b5f6',
    radius: 32,
  },
  {
    index: 4,
    name: 'E',
    color: '#81c784',
    radius: 57,
  },
  {
    index: 5,
    name: 'Project 6',
    position: {
      x: 2620,
      y: 271,
    },
    color: '#f48fb1',
    radius: 33,
  },
];

function Bubbles() {
  return (
    <div className="bubble-container">
      <ReactBubbleChart data={bubbles} />
    </div>
  );
}

export default Bubbles;
