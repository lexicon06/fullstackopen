import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header';
import Total from './components/Total';
import Part from './components/Part';

function App() {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Content = () => {
    return (
     <div>
     <Part name={part1.name} size={part1.exercises}/>
     <Part name={part2.name} size={part2.exercises}/>
     <Part name={part3.name} size={part3.exercises}/>
     </div>
    )
  }


  return (
    <div>
       <Header course={course} />

       <Content />

   <Total math={part1.exercises + part2.exercises + part3.exercises}/>
   
  </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
