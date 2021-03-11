import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from "../Footer/Footer";
import Header from '../Header/Header';
import SingleTeam from '../SingleTeam/SingleTeam';
import './Home.css';

const Home = () => {
    const [ teams , setTeams ] = useState([]);
    const {idTeam} = teams;

    useEffect (()=>{
        const url="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [] )

    return (
        <>
            <Header />
                <main className="pt-4" >
                    <Container>
                        <Row>
                            {
                                teams.map(team => <SingleTeam key={idTeam} team={team}/> )
                            }
                        </Row>
                    </Container>
                </main>
            <Footer />
        </>
    );
};

export default Home;