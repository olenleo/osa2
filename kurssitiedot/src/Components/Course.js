import React from 'react';


const Course = ( props ) => {
    return (
        <div>
        <Header course = {props.course}/>
        <ul>
            {props.course.parts.map(part => {
                return (
                <Part key = {part.id} name ={part.name} exercises = {part.exercises}>
                   {part.name}
                </Part>
                )
            })}
        </ul>
        <p><b>Total exercises: {props.course.parts.reduce((summa,part) => summa + part.exercises, 0)}</b></p>
        </div>
    )

}

const Header = ( {course} ) => { 
    return (
      <div>
        <h1> {course.name}</h1>
      </div>
    )
}
    
const Part = ( props ) => {
    
  return (
    <div>
      {props.name} {props.exercises}
    </div>
    )
  }

export default Course