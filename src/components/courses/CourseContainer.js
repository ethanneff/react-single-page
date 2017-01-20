// Lib
import React, { Component } from 'react'
import Course from './Course'

// Component
class CourseContainer extends Component {
  render () {
    let courseList = this.props.route.data
    let courses = courseList.map((course) => {
      return <Course title={course.title} desc={course.description} img={course.img_src} key={course.id} />
    })
    return (
      <div>
        <ul>
          {courses}
        </ul>
      </div>
    )
  }
}

// Public
export default CourseContainer
