import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleTeam.css';

const SingleTeam = (props) => {
    const {strTeam , strSport , strTeamBadge , idTeam} = props.team
    return (
             <Col lg={4} md={6} xs={12} className=" mt-3 p-3">
        <Card className="card  mt-4 p-5 bg-light">
            <Card.Img variant="top" className="card-image m-auto" src={strTeamBadge} alt="..." />
                <Card.Body className="text-center">
                     <h3>{strTeam}</h3>
                    <p> Sports Type : {strSport}</p>
                    <Button as={Link} to={`/team/${idTeam}`} key={idTeam} variant="warning"> Explore 
                     <span className="ml-2"  >  <FontAwesomeIcon icon={faArrowRight} /> </span> </Button>
                </Card.Body>  
        </Card>
        </Col>
    );
};

export default SingleTeam;