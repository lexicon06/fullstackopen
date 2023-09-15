import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header';
import Total from './components/Total';
import Part from './components/Part';

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Content = () => {
    return (
     <div>
     <Part name={course.parts[0].name} size={course.parts[0].exercises}/>
     <Part name={course.parts[1].name} size={course.parts[1].exercises}/>
     <Part name={course.parts[2].name} size={course.parts[2].exercises}/>
     </div>
    )
  }


  return (
    <div>
       <Header course={course.name} />

       <Content />

   <Total math={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
   
  </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
