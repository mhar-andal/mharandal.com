import React from 'react';
import { render } from 'react-dom';
import { Parallax } from 'react-parallax';

const styles = {
  fontFamily: 'Poppins',
  textAlign: 'center',
};
const insideStyles = {
  background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '200px',
};
const image1 = './images/header.jpg';
const image2 = './images/header-new.jpg';
const image3 = './images/header-full.jpg';

const App = () => (
  <div style={styles}>
    <Parallax
      bgImage={image3}
      bgStyle={{
        // top: '-125px',
      }}
      bgHeight="auto"
      bgWidth="100vw"
      strength={200}
    >
      <div style={{ height: '100vh', width: '100vw' }}>
        <div style={insideStyles}>
          mhar andal
          <br />
          software engineer
        </div>
      </div>
    </Parallax>
    
    <div style={{ height: '500px', display: 'grid' }}>
      <h1>Projects</h1>
      <h1>Skills</h1>
      <h1>Experience</h1>
    </div>
    <div style={{ height: '500px' }} />
    <div style={{ height: '500px' }} />
  </div>
);

render(<App />, document.getElementById('root'));
