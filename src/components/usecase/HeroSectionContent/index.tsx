import StackComponent from '@/components/base/StackComponent'
import TypographyComponent from '@/components/base/TypographyComponent'
import React from 'react'
import './style.css'
import SingleStyledLetter from './SingleStyledLetter';

const HeroSectionContent = () => {
    const headingFirstLine = 'Experience Real';
    const headingSecondLine = 'Estate Agility';

    const breakItDown = (str: string) => {
        return str.split('').map((char) => (char === ' ' ? '\u00A0' : char)); // Replace space with non-breaking space
    };

    return (
        <StackComponent direction='column' style={{ alignItems: 'flex-start', position: 'absolute', bottom: '100px', left: '10vw' }}>
            <TypographyComponent className='hero-heading' variant='h1'>
                <div className='hero-container'>
                    <div className="hero-text-line line-1">
                        <div className='hero-word'>
                            {breakItDown(headingFirstLine).map((eachLetter, index) => (
                                <SingleStyledLetter index={index} key={index}>
                                    {eachLetter}
                                </SingleStyledLetter>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='hero-container'>
                    <div className="hero-text-line line-1">
                        <div className='hero-word'>
                            {breakItDown(headingSecondLine).map((eachLetter, index) => (
                                <SingleStyledLetter index={index} key={index}>
                                    {eachLetter}
                                </SingleStyledLetter>
                            ))}
                        </div>
                    </div>
                </div>
            </TypographyComponent>
            <StackComponent justifyContent='flex-start' alignItems='flex-end' style={{ color: "#ffffff", fontSize: '1.2rem', fontWeight: 200 }}>
                <TypographyComponent style={{ marginRight: '2rem', width: '40%' }}>Create a Digital Twin Token (DTT®) of your existing building and release the potential of Web3.</TypographyComponent>
                <button className='hero-btn'>
                    <span>Learn More</span>
                </button>
            </StackComponent>
        </StackComponent>
    )
}

export default HeroSectionContent