import React, { useState } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';

const AnimatedDiv = styled.div`
  height: ${props => props.height};
  transition: height .2s ease-in-out;
  border: 2px solid black;
`

function App() {
  const [height, setHeight] = useState("80px");

  const toggleHeight = () => {
    if (height === "80px") {
      setHeight("160px")
    } else {
      setHeight("80px")
    }
  }

  return (
    <div>
    <AnimatedDiv height={height}>
      <p>
        Here is some stuff.
      </p>
    </AnimatedDiv>
    <button onClick={toggleHeight}>Toggle Height</button>
      </div>
  );
}

export default App;
