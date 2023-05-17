import React, { useState } from 'react';
import './App.css';

// Import the group photo from the public folder
import groupPhoto from './groupPhoto.jpg';

// Import the icons from react-icons
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function App() {
  // Use state to store the header text
  const [headerText, setHeaderText] = useState('Welcome to our website!');

  // Define a function to change the header text on mouse enter
  const handleMouseEnter = () => {
    setHeaderText('We are happy to see you!');
  };

  // Define a function to change the header text on mouse leave
  const handleMouseLeave = () => {
    setHeaderText('Welcome to our BELAH!');
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Add event handlers to the header element */}
        <h1
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {headerText}
        </h1>
      </header>
      <main className="App-main">
        {/* Add a class name to the image element */}
        <img src={groupPhoto} alt="Memebrs of Belah in libaray doing some python" className="App-photo App-photo-animation" />
        <p className="App-description">
          We are a team of passionate developers who love to create amazing web
          apps using React. We have experience in building dynamic, responsive,
          and user-friendly websites for various domains. We are always eager to
          learn new technologies and improve our skills. If you want to work
          with us or hire us, please contact us at our email address below.
        </p>
      </main>
      <footer className="App-footer">
        <p>© 2023 byBELAH. All rights reserved.</p>
        <p>Email: contact@belah.com</p>
        {/* Add a div element to contain the icons */}
        <div className="App-icons">
          {/* Use the icons as components with the desired size and color */}
          <FaFacebook size={32} color="#3b5998" className="App-icon-animation" />
          <FaTwitter size={32} color="#1da1f2" className="App-icon-animation" />
          <FaInstagram size={32} color="#e1306c" className="App-icon-animation" />
        </div>
      </footer>
    </div>
  );
}

export default App;
