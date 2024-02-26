import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import '../styles.css'; 
import { Routes } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';
import Students from "../assets/students.jpg";

import { Container, Grid, Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
//import Footer from "../components/Footer";


const HomeContainer = styled.div`
  background-image: url(${Students});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

const CardsContainer = styled(Container)`
  position: relative;
  top: -50px; /* Adjust as needed */
  background-color: rgba(255, 255, 255, 0.8); /* Background color with opacity */
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: top 0.5s ease; /* Smooth transition for the sliding effect */
`;

const Card = styled(Box)`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Home = () => {
    return (
        <>
            <Navbar />
            <HomeContainer>
                <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
                    <Grid item xs={10} sm={8} md={6}>
                        <Typography variant="h3" align="center" gutterBottom style={{ color: '#fff' }}>
                            Welcome to Our Website
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color: '#fff' }}>
                            Scroll down to explore more
                        </Typography>
                    </Grid>
                </Grid>
            </HomeContainer>
            <CardsContainer>
                <Container>
                    <Grid container spacing={3} style={{ paddingTop: '50px' }}>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <Typography variant="h5" gutterBottom>
                                    Events
                                </Typography>
                                <Typography variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida leo et eros ullamcorper convallis.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <Typography variant="h5" gutterBottom>
                                    Attendance
                                </Typography>
                                <Typography variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida leo et eros ullamcorper convallis.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <Typography variant="h5" gutterBottom>
                                    Booking
                                </Typography>
                                <Typography variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida leo et eros ullamcorper convallis.
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </CardsContainer>
            <Footer />
        </>
    );
};

export default Home;