// Lib
import React from 'react'

// Component
const Course = props => (
  <li className='course media group'>
    <img className='course-img' src={props.img} />
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      hello
    </div>
  </li>
)

// Public
export default Course
