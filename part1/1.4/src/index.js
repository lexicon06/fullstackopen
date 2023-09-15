import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header';
import Total from './components/Total';
import Part from './components/Part';

function App() {

  const course = 'Half Stack application development'
  const parts = [
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

  const Content = () => {
    return (
     <div>
     <Part name={parts[0].name} size={parts[0].exercises}/>
     <Part name={parts[1].name} size={parts[1].exercises}/>
     <Part name={parts[2].name} size={parts[2].exercises}/>
     </div>
    )
  }


  return (
    <div>
       <Header course={course} />

       <Content />

   <Total math={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
   
  </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
