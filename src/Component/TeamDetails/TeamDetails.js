import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faFutbol, faMapMarkerAlt, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card, Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import femaleImage from '../../img/female.png';
import maleImage from '../../img/male.png';
import './TeamDetails.css';

const TeamDetails = () => {
   const { idTeam } = useParams();

   const [team , setTeam ] = useState([]);
   
   const{strStadiumThumb  , strTeamBadge, strDescriptionEN , strStadiumDescription , strTeam , intFormedYear , strCountry , strSport , strGender , strTwitter , strWebsite , strYoutube} = team;

   useEffect( () =>{
       const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
       fetch(url)
        .then (res => res.json())
        .then(data => setTeam(data.teams[0]))
   }, [idTeam])

   
    return (
        
        <>
            <Card>
                <Card.Img className="stadium-image" src={strStadiumThumb} alt="..." />
                <div>
                    <Card.ImgOverlay>
                        <Image className="team-logo margin-auto" src={strTeamBadge } alt="..." />
                    </Card.ImgOverlay>
                </div>
            </Card>
            <div className="player-details">
                 <div className="container ">
                    <section className="about-team mt-5" >
                        <div className="row d-flex">
                            <div className="col-md-6  p-5">
                                <h2>{strTeam}</h2>
                                <h5><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded : {intFormedYear}</h5>
                                <h5><FontAwesomeIcon icon={faFlag} /> Country : {strCountry}</h5>
                                <h5><FontAwesomeIcon icon={faFutbol} /> Sport Type : {strSport}</h5>
                                <h5><FontAwesomeIcon icon={faVenusMars} /> Gender : {strGender}</h5>
                            </div>
                            <div className="col-md-6  conditional-image">
                                {
                                    strGender ==="Male" ? <img src={maleImage} alt="..." /> : <img src={femaleImage} alt="..." />
                                }
                            </div>
                        </div>
                    </section>
                <section className="mt-5">
                        <p>{strDescriptionEN}</p>
                        <p className="mt-5">{strStadiumDescription}</p>
                </section>
                <section className="social-link text-center mt-5 mb-5">
                    <a target="-blank" href={`https://${strTwitter}`} className="twitter text-info mr-3">
                            <FontAwesomeIcon icon={faTwitter}  />
                    </a>
                    <a target="-blank" href={`https://${strWebsite}`} className="facebook text-primary ">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a target="-blank" href={`https://${strYoutube}`} className="youTube text-danger ml-3">
                            <FontAwesomeIcon icon={faYoutube} />
                     </a>
                </section>
                </div>
            </div>
        </>
    );
};

export default TeamDetails;