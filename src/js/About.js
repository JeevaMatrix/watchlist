import React from 'react'
import '../css/about.css'  //css file

const About = () => {
  return (
    <div className='abt'>
<h1>About This Project</h1>
      <p>
        Hey, I'm <strong>Jeeva</strong>—a MERN stack developer, UI sculptor, and a dev on a
        mission to turn ideas into interactive web experiences.
      </p>
      <p>
        This project is a <strong>Movie Watchlist App</strong> built using{" "}
        <strong>React, Node.js, and Express</strong>. It allows users to search for movies,
        add them to a watchlist, and manage their collection seamlessly. Through this
        project, I gained hands-on experience in <strong>full-stack development</strong>,
        including API integration, backend logic, and state management.
      </p>

      <h2>🔹 Key Features & Implementation</h2>

      <h3>Frontend (React)</h3>
      <ul>
        <li>
          🔍 <strong>Movie Search & Recommendations:</strong> Implemented a live search
          bar that fetches movie data dynamically using the TMDB API. Optimized performance
          using debouncing.
        </li>
        <li>
          📌 <strong>Movie Watchlist (CRUD Operations):</strong> Users can add, view, and
          delete movies from the watchlist. The frontend efficiently interacts with the
          backend to store and retrieve data.
        </li>
        <li>
          📂 <strong>Sidebar Navigation & Mobile Responsiveness:</strong> Created a
          collapsible sidebar for navigation, built with CSS Grid & Flexbox for a smooth
          UI.
        </li>
        <li>
          ⚡ <strong>State Management & Optimizations:</strong> Managed state using
          <code> useState </code> and <code> useEffect </code>, optimized performance with
          conditional rendering and memoization.
        </li>
        <li>
          🎨 <strong>Improved User Experience:</strong> Implemented automatic redirection
          after adding a movie, ensured smooth event handling, and built a fully
          responsive UI.
        </li>
      </ul>

      <h3>Backend (Node.js & Express)</h3>
      <ul>
        <li>
          🗄️ <strong>Express Server & API Integration:</strong> Built a Node.js server
          with Express to handle API requests. The backend acts as a bridge between the
          frontend and external movie data sources.
        </li>
      </ul>

      <h2>🚀 Future Plans (Database Integration)</h2>
      <ul>
        <li>🔑 MongoDB database for persistent storage</li>
        <li>🔑 JWT authentication for user-specific watchlists</li>
        <li>🔑 Improved API request handling & security</li>
      </ul>

      <h2>🚀 What I Learned & Challenges Faced</h2>
      <ul>
        <li>✔ Setting up a backend with Express.js</li>
        <li>✔ Handling API requests & structuring routes</li>
        <li>✔ Connecting frontend and backend effectively</li>
        <li>✔ Optimizing performance with debouncing & caching</li>
      </ul>
      <p>
        One major challenge was <strong>ensuring seamless communication between React and
        Express</strong> while handling async operations. Debugging API responses and
        structuring routes efficiently was a great learning experience! 🔥
      </p>
    </div>
  )
}

export default About