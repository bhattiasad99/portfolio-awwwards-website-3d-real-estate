import StackComponent from '@/components/base/StackComponent'
import TypographyComponent from '@/components/base/TypographyComponent'
import React from 'react'
import SingleStyledLetter from './SingleStyledLetter';

const HeroSectionContent = () => {
    const headingFirstLine = 'Experience Real';
    const headingSecondLine = 'Estate Agility';
    return (
        <StackComponent direction='column' style={{ alignItems: 'flex-start', position: 'absolute', bottom: '100px', left: '10vw' }}>
            <TypographyComponent style={{ color: "#ffffff" }} variant='h1'>
                <div style={{ display: 'flex' }}>
                    {headingFirstLine.split(' ').map(eachWord => <div style={{ marginRight: '1rem', display: 'flex' }}>{eachWord.split('').map(eachLetter => <SingleStyledLetter key={eachLetter}>{eachLetter}</SingleStyledLetter>)}</div>)}
                </div>
                <div style={{ display: 'flex' }}>
                    {headingSecondLine.split(' ').map(eachWord => <div style={{ marginRight: '1rem', display: 'flex' }}>{eachWord.split('').map(eachLetter => <SingleStyledLetter key={eachLetter}>{eachLetter}</SingleStyledLetter>)}</div>)}
                </div>
            </TypographyComponent>
            <TypographyComponent style={{ color: "#ffffff" }}>Create a Digital Twin Token (DTT®) of your existing building and release the potential of Web3.</TypographyComponent>
        </StackComponent>
    )
}

export default HeroSectionContent