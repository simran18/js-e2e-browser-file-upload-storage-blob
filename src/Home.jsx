import logo from "./images/logo_3.gif";

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {


  return (
    <div>
      <div className='logo'> <img src={logo} alt="logo" /> </div>
      
      <h2> Welcome! </h2>
       <p> This is an innovative deep learning AI solution deployed on Azure cloud that elevates virtual yoga practice and makes it more accessible by making the video content searchable, providing the analysis of health benefits of the session and curating personalized recommendations, while reducing costs. To enable this experience, we developed a platform for multi-modal yoga video summarization powered by computer vision AI. It incorporates a user-friendly UI, a content analysis pipeline running behind the scene, and a recommendation engine that connects the two pieces together. We invested significant effort in providing privacy guarantees.</p>
       
       <br />
        <p>The switch to remote work, lesser physical activities and social isolation have created new challenges. With the increased level of stress and loss of jobs worldwide, the development of affordable, safe, and efficient ways to maintain physical and mental health has become more important. Yoga is a great way to achieve this. However, since the beginning of the pandemics, fitness centers and yoga studios around the world have been either fully or partially unavailable due to distancing restrictions. The practitioner’s ability to receive guidance from professional instructors has significantly reduced. Navigating the ocean of online sessions published by fitness centers and independent instructors is challenging, especially for beginners and people with injuries or other health issues. In our capstone project we set a goal to make the growing amount of online video content for at-home yoga practice more accessible and searchable. Our work will empower instructors, their students, and online fitness platforms to build personalized and balanced program of exercises with AI-powered tools for summarization of videos and recommendation engine for picking practices that best match the user’s needs.  .</p>
    </div>
  );
}

export default Home;