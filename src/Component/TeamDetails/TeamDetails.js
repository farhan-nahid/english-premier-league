import { faFacebook } from '@fortawesome/free-solid-brands-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';

const TeamDetails = () => {
   const { idTeam } = useParams();

   const [team , setTeam ] = useState([])
   console.log(team);
   const{strTeamBanner , strDescriptionDE , strDescriptionEN}=team

   useEffect( () =>{
       const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
       fetch(url)
        .then (res => res.json())
        .then(data => setTeam(data.teams[0]))
   }, [idTeam])
    return (
        
        <>
            <div className="team-banner">
                <img src={strTeamBanner} alt="..."/>
            </div>
            <div className="team-information">

            </div>
            <div className="mt-5">
                <p>{strDescriptionDE}</p>
                <p className="mt-5">{strDescriptionEN}</p>
            </div>
            <div className="social-link">
                <h3><FontAwesomeIcon icon={faFacebook} /> </h3>
            </div>
        </>
    );
};

export default TeamDetails;