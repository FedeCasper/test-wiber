import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
   return (
      <div className="d-flex flex-column justify-content-center align-items-center gap-3 py-5">
         <h1>Welcome</h1>

         <div className="container">
            <h3>Welcome to the CRUD Application</h3>
            <p>This powerful CRUD (Create, Read, Update, Delete) application empowers you to efficiently manage and organize your data. Whether you are a business professional, student, or hobbyist, our user-friendly platform makes data handling a breeze.</p>

            <div className="features">
               <div className="feature">
                  <h4>Key Features</h4>
                  <ul>
                     <li><strong>Effortless Data Creation:</strong> Easily create new records and entries with our intuitive interface.</li>
                     <li><strong>Flexible Data Updates:</strong> Update and modify existing information in just a few clicks.</li>
                     <li><strong>Data Visualization:</strong> Explore and visualize your data using clear and interactive charts and graphs.</li>
                     <li><strong>Secure Data Deletion:</strong> Safely delete records that are no longer needed, ensuring your data stays organized.</li>
                  </ul>
               </div>

               <div className="testimonial">
                  <h4>What Our Users Say</h4>
                  <blockquote>
                     "The CRUD Application has revolutionized the way I handle my data. It's user-friendly, efficient, and has become an essential tool in my daily workflow."
                     <footer>- Happy User</footer>
                  </blockquote>
               </div>
            </div>

            <div className="cta">
               <p>Ready to take control of your data?</p>
            </div>
         </div>


      </div>
   )
}

export default Home