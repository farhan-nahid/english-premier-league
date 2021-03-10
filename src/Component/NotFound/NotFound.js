import React from 'react';
import { Alert } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Alert variant="danger" >
            <Alert.Heading>Oh snap!!!  You got an error!!!</Alert.Heading>
              <p>Change this and try again. </p>
         </Alert>
    );
};

export default NotFound;