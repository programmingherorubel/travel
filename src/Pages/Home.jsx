import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;