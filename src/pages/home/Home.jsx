import React from 'react';
import "./Home.scss";
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trsutedBy/TrustedBy';

const Home = () => {
    return (
        <div className = 'Home'>
            <Featured />
            <TrustedBy />
        </div>
    );
};

export default Home;