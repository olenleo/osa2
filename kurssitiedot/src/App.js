import React from 'react';
import Course from "./Components/Course.js"
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
/*
joo {props.course.parts.map(part => {
                return (
                <Part key = {part.id} name ={part.name} exercises = {part.exercises}>
                   {part.name}
                </Part>
                )
            })}
*/
  return (
    <div>
      {courses.map(course => {
        return (
          <Course key = {course.id} course = {course} />
        )
      })}
      
    </div>
  )
}
export default App