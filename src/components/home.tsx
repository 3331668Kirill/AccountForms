import React from 'react';
import homeimage from './home.jpeg'



function Home () {
    return (
        <div className="home" style={{backgroundColor: 'white'}}>

            ГЛАВНАЯ
            <img src={homeimage}/>

        </div>

    );
}

export default Home;
