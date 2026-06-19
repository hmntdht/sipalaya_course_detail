import React from "react";
import Card from "./components/Card";
import cyberImage from "./assets/cyber.jpeg"; 
import digi from "./assets/digital.jpg"
import graph from './assets/graphic_designbanner.jpg'
import mern from './assets/mern.webp'
import uiux from './assets/ux-ui-design.jpeg'
import re from './assets/react.jpeg' 

function App() {
  return (
    <div>

      <h1>Featured Courses</h1>
      <p>Industry-aligned programs designed for real-world success</p>
      <div className="course-grid">
      <Card
        url={cyberImage}
        title="Become a Job-Ready Cyber Security Professional – Ethical Hacking & Threat Protection"
        desc="Learn to protect networks, systems, and web applications from cyber threats with hands-on ethical hacking, penetration testing, and threat detection."
        link = "https://sipalaya.com/courses/37"
      />

      <Card
        url={uiux}
        title="Master UI/UX Design & Build Real-World Projects"
        desc="Master UI/UX design to create intuitive, user-friendly web and mobile interfaces. Learn wireframing, prototyping, usability testing, and industry-standard tools like Figma, Sketch, and Adobe XD."
        link = "https://sipalaya.com/courses/36"
      />

      <Card
        url={graph}
        title="Graphic Design for Jobs & Freelancing with Real Projects"
        desc="This Graphic Design course is designed to take you from beginner to job-ready professional. You will learn the core principles of visual communication, including layout, typography, color theory, and composition. Gain hands-on experience with industry-standard tools like Adobe Photoshop, Illustrator, Canva, and Sketch to create logos, social media graphics, marketing materials, and web designs."
        link = "https://sipalaya.com/courses/35"
      />

      <Card
        url={digi}
        title="Professional Digital Marketing Training for Jobs & Freelancing"
        desc="Master Digital Marketing with real-world campaigns and practical skills in SEO, Google Ads, Social Media Marketing, and Analytics. Learn to drive traffic, generate leads, and grow businesses online while building a strong portfolio to become job-ready as a Digital Marketing Executive, SEO Specialist, or Social Media Manager."
        link = "https://sipalaya.com/courses/34"      
      />

      <Card
        url={re}
        title="Master React JS & Build Modern Web Applications"
        desc="Master modern frontend development with React JS and build dynamic, responsive web applications. Learn components, hooks, state management, API integration, and real-world projects. Gain hands-on experience and create a strong portfolio to become job-ready as a React Developer, Front-End Developer, or Full-Stack Developer."
        link ="https://sipalaya.com/courses/33"      
      />

      
      <Card
        url={mern}
        title="Become a Job-Ready MERN Stack Developer with Real Projects"
        desc="Master full-stack web development with the MERN Stack (MongoDB, Express.js, React.js, Node.js). Build real-world projects, gain hands-on experience, and develop a professional portfolio that prepares you for roles as a Full-Stack, Front-End, or Back-End Developer."
          link ="https://sipalaya.com/courses/32"  
      />
      </div>

    </div>


  );
}

export default App;
