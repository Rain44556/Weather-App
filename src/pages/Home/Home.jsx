import React from 'react';
import Hero from "../../components/Hero/Hero";
import TopDestinations from "../../components/TopDestinations/TopDestinations";
import WeatherByte from "../../components/WeatherByte/WeatherByte";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
        <TopDestinations></TopDestinations>
        <WeatherByte></WeatherByte>
        </div>
    );
};

export default Home;