import React from 'react';
import { render } from 'react-dom';
import { Parallax } from 'react-parallax';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  height: '100vh',
  width: '100vw',
};
const insideStyles = {
  background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
};
const image1 = './images/header.jpg';
const image2 = './images/header-new.jpg';

const App = () => (
  <div style={styles}>
    <Parallax
      bgImage={image2}
      bgStyle={{
        top: '-125px',
      }}
      bgHeight="125vh"
      bgWidth="100vw"
      strength={100}
    >
      <div style={{ height: '100vh' }}>
        <div style={insideStyles}>MHAR ANDAL</div>
        <div style={insideStyles}>Software Engineer</div>
      </div>
    </Parallax>
    {/* <div style={{ height: '500px' }} />
    <div style={{ height: '500px' }} />
    <div style={{ height: '500px' }} /> */}
  </div>
);

render(<App />, document.getElementById('root'));
