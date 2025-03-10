import React from 'react';

function Courses() {
  const courseList = [
    { id: 1, title: 'Introduction to React', description: 'Learn the basics of React.js.' },
    { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JavaScript concepts.' },
    { id: 3, title: 'Web Development Bootcamp', description: 'Full-stack web development course.' },
  ];

  return (
    <div>
      <h1>Available Courses</h1>
      <ul>
        {courseList.map(course => (
          <li key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;