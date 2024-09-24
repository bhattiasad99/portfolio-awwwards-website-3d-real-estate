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
            <TypographyComponent className='hero-heading' style={{}} variant='h1'>
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
            <TypographyComponent style={{ color: "#ffffff" }}>Create a Digital Twin Token (DTT®) of your existing building and release the potential of Web3.</TypographyComponent>
        </StackComponent>
    )
}

export default HeroSectionContent