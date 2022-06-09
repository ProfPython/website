import './index.scss'
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate') 

    useEffect(() => {
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return(
        <>
            <div className='container portfolio-page'>
                <h1 className='page-title'>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['P','o','r','t','f','o','l','i','o']}
                    idx={15}
                    />
                </h1>
                {/* <div>{renderPortfolio()}</div> */}
            </div>
            <Loader type = 'pacman'/>
        </>
    )
}


export default Portfolio