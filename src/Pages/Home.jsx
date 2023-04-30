import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;