import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header';
import Total from './components/Total';

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

 
const Content = (props) => {
return <p>{props.name} {props.size}</p>
}

  return (
    <div>
       <Header course={course} />

       <Content name={part1} size={exercises1}/>
       <Content name={part2} size={exercises2}/>
       <Content name={part3} size={exercises3}/>

   <Total math={exercises1 + exercises2 + exercises3}/>
   
  </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
