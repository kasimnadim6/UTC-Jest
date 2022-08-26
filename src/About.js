import React from 'react';

function About() {
  return <div>About</div>;
}

export const add = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  return 'wrong input';
};
export default About;
