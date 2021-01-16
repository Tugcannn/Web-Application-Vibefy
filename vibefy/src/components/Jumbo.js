import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Hello(){
    return(
        <Jumbotron>
        <h1>Welcome to Vibefy!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
      </Jumbotron>
    );
}

export default Hello;