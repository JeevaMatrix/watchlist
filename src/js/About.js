import React from 'react'
import '../css/about.css'

const About = () => {
  return (
    <div className='abt'>
        <h1>About this Project</h1>
        <p>
        Hey, I'm Jeeva—a MERN stack developer, UI sculptor, and a dev on a mission to turn ideas into interactive web experiences. <br /><br />

  This project is a <strong>Movie Watchlist App</strong> built using <strong>React</strong>. It allows users to 
  <strong>search for movies, add them to a watchlist, and manage their collection</strong> easily. Through this project, 
  I gained hands-on experience in <strong>React state management, API integration, event handling, and responsive design</strong>.<br/><br/>

  🔹 <strong>Key Features & Implementation:</strong><br/>
  <strong>🔍 Movie Search & Recommendations:</strong> Implemented a <strong>live search bar</strong> that fetches movie data dynamically. 
  Used <code>fetch</code> inside <code>useEffect</code> for API calls and optimized performance using <strong>debouncing</strong>.<br/><br/>

  <strong>📌 Movie Watchlist (CRUD Operations):</strong> Users can add, view, and delete movies from the watchlist. Data is stored 
  in <strong>React state</strong> and <strong>local storage</strong> for persistence while preventing duplicates using <code>.find()</code>.<br/><br/>

  <strong>📂 Sidebar Navigation & Mobile Responsiveness:</strong> Created a <strong>collapsible sidebar</strong> with a menu icon 
  for navigation. Used <strong>CSS Grid & Flexbox</strong> for layout and added <strong>click-outside-to-close</strong> functionality for small screens.<br/><br/>

  <strong>⚡ State Management & Optimizations:</strong> Managed state efficiently with <code>useState</code> and <code>useEffect</code>, 
  optimized performance using <strong>conditional rendering</strong>, and prevented <strong>unnecessary re-renders</strong>.<br/><br/>

  <strong>🎨 Improved User Experience:</strong> Implemented automatic redirection with <code>setTimeout</code> after adding a movie, 
  ensured smooth event handling, and built a fully <strong>responsive UI</strong>.<br/><br/>

  🚀 <strong>What I Learned & Challenges Faced:</strong><br/>
  ✔ Handling API calls & managing asynchronous data<br/>
  ✔ Efficient state management in React<br/>
  ✔ Optimizing performance with debouncing & memoization<br/>
  ✔ Building a responsive and user-friendly UI<br/><br/>

  One challenge was <strong>preventing unnecessary re-renders</strong> when updating states. Debugging dependencies in <code>useEffect</code> 
  was a great learning experience. This project strengthened my <strong>React skills</strong> and improved my problem-solving abilities! 🔥
</p>

    </div>
  )
}

export default About